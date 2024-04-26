import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import './Contact.css';
import { useRef } from "react";

const Contact = () => {  
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envie-nos uma mensagem <img src={msg_icon} alt="" /></h3>
        <p>Sinta-se à vontade para entrar em contato através do formulário de contato ou encontre nossas informações de contato abaixo. Seus comentários, perguntas e sugestões são importantes para nós enquanto nos esforçamos para fornecer um serviço excepcional à nossa comunidade universitária.</p>
        <ul>
            <li><img src={mail_icon} alt="" />contato@joaopedro.com</li>
            <li><img src={phone_icon} alt="" />+55 (61)98284-7595</li>
            <li><img src={location_icon} alt="" />Samambaia, DF</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Seu nome</label>
          <input type="text" name="name" placeholder="Digite seu nome" required/>
          <label>Número de telefone</label>
          <input type="tel" name="phone" placeholder="Digite seu número de telefone" required/>
          <label>Escreva sua mensagem aqui</label>
          <textarea name="message" rows="6" placeholder="Digite sua mensagem" required></textarea>
          <button type="submit" className="btn dark-btn">Enviar agora <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
