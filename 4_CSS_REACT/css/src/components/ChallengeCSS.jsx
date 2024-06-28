import { useState } from "react"
import styles from "./ChallengeCSS.module.css"

const ChallengeCSS = () => {
    const [carros] = useState ([

        {id: 1, name: "911 turbo", km: 0, color: "preta"},
        {id: 2, name: "Cayenne", km: 0, color: "bege"},
        {id: 3, name: "Macan", km: 0, color: "azul"}
    ])

  return (

    <div>
        <h1 className={styles.h1_style}>Carros à Venda!</h1>
        <ul>
        {carros.map((carros) => (
            <li key={carros.id} className={styles.car_style}>,
                <li className={styles.car_style}>Nome: {carros.name}</li>
                <li>Km: {carros.km}</li>
                <li>Cor: {carros.color}</li>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default ChallengeCSS