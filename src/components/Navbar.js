import { NavLink } from 'react-router-dom'
// import './Navbar.css';

function Navbar() {

    return (
        <div className="navbar-container">

            <NavLink className={({isActive}) => isActive ? "active-link" : "inactive-link" } 
            to='/menu'>Menu</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "inactive-link" } 
            to='/new-recipe'>New Recipe</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "inactive-link" } 
            to='/about'>About</NavLink>
            

        </div>
    )

}

export default Navbar