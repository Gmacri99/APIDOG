import './App.css'
import ApiDog from './components/API'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {


  return (
    <div className="App">
      <Header title="Breed Dogs"/>
      <section>
        <ApiDog/>
      </section>
      <Footer/>
    </div>
  )
}

export default App
