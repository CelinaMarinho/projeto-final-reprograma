import LogoImage from '../../assets/AdobeStock_grafismo.jpeg'
import './header.styles.css'

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="teste2"
          src={LogoImage} 
          alt='ilustração de grafismo indígena' 
        />
      </div>
    </header>
  )
}

export default Header