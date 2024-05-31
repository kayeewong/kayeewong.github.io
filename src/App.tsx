import Header from "./components/Header"
import css from './styles/App.module.scss'

function App() {
  return(
    <div className={`bg-primary ${css.container}`}>
      <Header />
    </div>
  )
}

export default App
