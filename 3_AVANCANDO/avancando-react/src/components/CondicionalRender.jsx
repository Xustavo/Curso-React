import { useState } from "react"

const CondicionalRender = () => {
    const[x] = useState(false)

    const [name, setName] =useState("Maria")

  return (
    <div>
        {/*If super simples*/}
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>x agora é falso</p>}
        {/*If ternário*/}
        {name === "Gustavo" ? (
            <div>
                <p>O nome é Gustavo</p>
            </div>
        ) : (
            <div>
                <p>O nome não é Gustavo</p>
            </div>
        )}
        <button onClick={() => setName("Gustavo")}>CLique Aqui!</button>
    </div>
  )
}

export default CondicionalRender