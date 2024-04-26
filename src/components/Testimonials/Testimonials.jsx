import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import './Testimonials.css';
import { useRef } from 'react';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideFoward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        console.log(tx)
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
        console.log(tx)
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className="next-btn" onClick={slideFoward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Letícia Miranda</h3>
                            <span>Edusity, BR</span>
                        </div>
                    </div>
                    <p>Escolher cursar minha graduação na Edusity foi uma das melhores decisões que já tomei. A comunidade solidária, as instalações de última geração e o compromisso com a excelência acadêmica realmente superaram minhas expectativas.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Pedro Batista</h3>
                            <span>Edusity, BR</span>
                        </div>
                    </div>
                    <p>Escolher cursar minha graduação na Edusity foi uma das melhores decisões que já tomei. A comunidade solidária, as instalações de última geração e o compromisso com a excelência acadêmica realmente superaram minhas expectativas.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Thaís Almeida</h3>
                            <span>Edusity, BR</span>
                        </div>
                    </div>
                    <p>Escolher cursar minha graduação na Edusity foi uma das melhores decisões que já tomei. A comunidade solidária, as instalações de última geração e o compromisso com a excelência acadêmica realmente superaram minhas expectativas.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Vitor Gonçalves</h3>
                            <span>Edusity, BR</span>
                        </div>
                    </div>
                    <p>Escolher cursar minha graduação na Edusity foi uma das melhores decisões que já tomei. A comunidade solidária, as instalações de última geração e o compromisso com a excelência acadêmica realmente superaram minhas expectativas.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials;