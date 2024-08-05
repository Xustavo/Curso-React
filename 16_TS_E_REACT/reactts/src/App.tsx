import { createContext } from 'react';
import './App.css';

//Components
import Destructurin, {Category} from './components/Destructurin';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';
import Context from './components/Context';

//Type
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo"

//Context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null> (null)

function App() {

  //variaveis
  const name:string = "Gustavo"
  const age: number = 18
  const isWorking: boolean = true

  //funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  //type
  const myText:textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  //mySecondText= "opa"

  const testandoFixed: fixed = "Isso"

  //Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructurin title="Primeiro post" content="Conteúdo" commentsQty={10} tags={["TS", "JS", "React"]} category={Category.TS} />
      <State />
      {myText && 
        <p>Tem texto na variável</p>
      }
      {mySecondText &&
        <p>Tem texto na variável</p>
      }
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
