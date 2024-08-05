import { useState } from 'react'
import {useEffect} from 'react'

const HookUseEffect = () => {
    // useEffect, sem dependencias
    useEffect(() => {
        console.log("Estou sendo executado!")
    })

    const [number, setNumber] = useState (1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // array de dependencias vazio
    useEffect (() => {
        if(anotherNumber > 0){
            console.log ("serei executado apenas uma vez...")
        }
    }, [])

    // item no array de dependencias
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {

        console.log("Sou executado quando o número muda")

    }, [anotherNumber])

    //cleanup do useEffect
    useEffect (() => {

        /*const timer = setTimeout (() => {
            console.log ("Hello World")

            //setAnotherNumber(anotherNumber + 1)
        }, 2000)

        return() => clearTimeout(timer)*/

    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Somar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o another number!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect