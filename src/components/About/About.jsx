import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png"
import './About.css';

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img"/>
            <img src={play_icon} alt="" className="play-icon"/>
        </div>
        <div className="about-right">
            <h3>SOBRE A UNIVERSIDADE</h3>
            <h2>Nutrindo Hoje os Líderes de Amanhã</h2>
            <p>Embarque em uma jornada educacional transformadora com os programas educacionais abrangentes da nossa universidade. Nosso currículo de ponta é projetado para capacitar os alunos com o conhecimento, as habilidades e as experiências necessárias para se destacarem no dinâmico campo da educação.</p>
            <p>Com foco na inovação, aprendizagem prática e orientação personalizada, nossos programas preparam aspirantes a educadores para causar um impacto significativo em salas de aula, escolas e comunidades.</p>
            <p>Quer você deseje se tornar um professor, administrador, conselheiro ou líder educacional, nossa ampla gama de programas oferece o caminho perfeito para atingir seus objetivos e liberar todo o seu potencial na definição do futuro da educação.</p>
        </div>
    </div>
  )
}

export default About;