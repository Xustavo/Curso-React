import styles from './EditPost.module.css'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'

const EditPost = () => {

    const {id} = useParams()
    const {document:post} = useFetchDocument("posts", id)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState("")
  const [formError, setFormError] = useState("")

  useEffect (() => {
    if(post) {
        setTitle(post.title)
        setBody(post.body)
        setImage(post.image)

        const textTags = post.tagsArray.join(", ")

        setTags(textTags)
    }
  }, [post])

  const { user } = useAuthValue()

  const { updateDocument, response } = useUpdateDocument("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    // Validar URL da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
      return
    }

    // Criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    // Checar os valores
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!")
      return
    }

    if (formError) return

    const data = { 
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data)

    // Redirecionar para a página inicial
    navigate("/dashboard")
  }

  return (
    <div className={styles.edit_post}>
        {post && 
            <>
    <h2>Editar seu Post: {post.title}</h2>
      <p>Altere os dados que desejar</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text" name="title" required placeholder='Pense em um bom título...' onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input type="text" name="image" required placeholder='Insira uma imagem para o seu post' onChange={(e) => setImage(e.target.value)} value={image} />
        </label>
        <p className={styles.previe_text}>Preview da imagem atual:</p>
        <img src={post.image} className={styles.image_preview} alt={post.title}/>
        <label>
          <span>Conteúdo do post:</span>
          <textarea name="body" required placeholder='Insira o conteúdo do post' onChange={(e) => setBody(e.target.value)} value={body} />
        </label>
        <label>
          <span>Tags:</span>
          <input type="text" name="tags" required placeholder='Insira as tags separadas por vírgula' onChange={(e) => setTags(e.target.value)} value={tags} />
        </label>
        {!response.loading && <button className='btn'>Editar</button>}
        {response.loading && <button className='btn' disabled>Aguarde...</button>}
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}
      </form>
            </>
        }
    </div>
  )
}

export default EditPost
