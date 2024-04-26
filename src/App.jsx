import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Nossos Programas' title='O Que Nós Oferecemos'/>
        <Programs/>
        <About/>
        <Title subTitle='Galeria' title='Fotos do Campus'/>
        <Campus/>
        <Title subTitle='Depoimentos' title='O Que os Estudantes Falam'/>
        <Testimonials/>
        <Title subTitle='Contate-nos' title='Entrar em Contato'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;