import{useState} from 'react'

const ManageData = () => {
    let someData = 10 //variável que não muda
    console.log(someData)

    const[number, setNumber] = useState(15) //para poder mudar valor de variável

  return (
    <div>
        <div>
            {/*Não muda o valor da variável e printa */}
            <p> Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
        </div>
        <div>
            {/*Muda o valor da variável e printa */}
            <p>Valor: {number}</p>
            <button onClick = {() => setNumber(25)}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData