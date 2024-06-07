import '../Components/footer.scss'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin-in.svg'
import {useNavigate} from 'react-router-dom'

function footer() {
  return (
    <div className='footermain'>
      <div className="newsletter">
        <div className="subscribe">
            <h2>Subscribe to my Newsletters</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className="email">
            <input type="text" />
            <button>Subscribe</button>
        </div> 
        </div>
        <div className="socials">
            <div className="copyright">
              <p>@Copyright 2024- Sharon Birgen</p>  
            </div>
            <div className="media">
            <a href="https://github.com/ShaBirgen" target="_blank">
                <img src={github} alt="GitHub Profile" />
            </a>
                <a href="https://x.com/Sharonbirgen2" target='_blank'>
            <img src={twitter} alt="" srcset="" />
            </a>
            <a href="https://www.linkedin.com/in/sharon-birgen-0341732ab/" target='_blank'>
            <img src={linkedin} alt="" srcset="" />
            </a>
            </div>
        </div>
    </div>
  )
}

export default footer
