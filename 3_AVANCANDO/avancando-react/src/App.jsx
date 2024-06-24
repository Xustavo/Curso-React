import './App.css'
import  Img2 from "./assets/img2.jpg" //por ser de src precisa ser importado dessa forma
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

function App() {


  return (
    <div>
      <h1>Avançando React - Seção 3</h1>
      {/*img em public*/}
      <div>
        <img src="/img1.jpg" alt="Plano de fundo" />
      </div>
      {/*img em asset*/}
      <div>
        <img src={Img2} alt="Segunda imagem" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  )
}

export default App
