import { Link } from 'react-router-dom'
import '../assets/CSS/header.css'

const Header = () =>{
  return(
    <header>
      <h1>This is Header</h1>
      <Link to="/Login"><button >Login</button></Link>
    </header>
  )
}

export default Header




