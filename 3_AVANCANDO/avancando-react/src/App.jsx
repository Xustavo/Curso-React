import './App.css'
import  Img2 from "./assets/img2.jpg" //por ser de src precisa ser importado dessa forma
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import  Fragment  from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'
import { useState } from 'react'

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0},
    {id: 2, brand: "Lamborguini", color: "Amarela", newCar: false, km: 13},
    {id: 3, brand: "Bugatti", color: "Azul", newCar: false, km: 22}
  ]

  function showMessage() {

    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState ("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
      <CondicionalRender />
      {/* props */}
      <ShowUserName name="Gustavo" />
      {/* props destructuring */}
      <CarDetails brand="GM" km={100000} color="preto" newCar={false}/>
      {/* reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="Vinho" newCar={true}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id} /* precisa do key para n dar problema no console */
        brand={car.brand} 
        color ={car.color} 
        km={car.km} 
        newCar={car.newCar}/>
      ))}
      <Fragment />
      {/* Children */}
      <Container myValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>
      {/* Executar função */}
        <ExecuteFunction myFunction={showMessage} />
      {/* StateLift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <UserDetails />
    </div>
  )
}

export default App
