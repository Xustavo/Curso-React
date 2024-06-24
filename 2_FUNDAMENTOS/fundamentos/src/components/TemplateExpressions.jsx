const TemplateExpressions = () => {

    const name = "Gustavo"
    const data = {

        age: 31,
        job: "programmer"
    };

    return(

        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    )

}

export default TemplateExpressions