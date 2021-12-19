
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from "react-icons/bs"
import './footer.styles.css'

const Footer = () =>{
    return(
        <> 
            <div className='container'>
                    
                <span>Feito com  <BsFillSuitHeartFill size={12} color="white"/>  por Celina Marinho, aluna Reprograma - 2021
                </span> 

                <a className="footer__link" href='https://www.linkedin.com/in/celina-marinho/' target="_blank" rel="noreferrer" ><BsLinkedin size={28} color="white" />
                </a>          
               
                <a className="footer__link" href='https://github.com/CelinaMarinho' target="_blank" rel="noreferrer" ><BsGithub size={28} color="white" />
                </a>      

                    
            </div>

            
            
        </>
    )
}

export default Footer

//<span>Priscila Souza <a className="git" target="_blank" rel="noreferrer" href="https://github.com/priKSouza"><VscGithubInverted/></a></span>

