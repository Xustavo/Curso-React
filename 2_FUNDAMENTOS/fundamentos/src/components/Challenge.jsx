const Challenge = () => {

    const valores = {

        primeiro: 1,
        segundo: 5
    }

    return (

        <div>
            <h1>O primeiro valor é {valores.primeiro}</h1>
            <h2>O segundo valor é {valores.segundo}</h2>
            <button onClick={() => {console.log(valores.primeiro + valores.segundo)}}>Clique aqui para somar os valores</button>
        </div>
    )

}

export default Challenge