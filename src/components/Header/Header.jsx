import LogoImage from '../../assets/linha_grafismo.png'
import './header.styles.css'

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="grafismo"
          src={LogoImage} 
          alt='ilustração de grafismo indígena' 
        />
      </div>
    </header>
  )
}

export default Header