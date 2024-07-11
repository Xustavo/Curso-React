//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

//refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Products = () => {

  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

      //contexto complexo
      const {color, dispatch} = useTitleColorContext()

  return (
    <div>
        <h1 style={{color: color}}>Products</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Products