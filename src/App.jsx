import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title/>
        <Programs/>
      </div>
    </div>
  )
}

export default App;