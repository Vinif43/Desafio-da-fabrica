import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
            <li>
                <Link to='/home'>Home</Link>    
            </li> 
            <li>
                <Link to='/cardAnimal'>Card Animal</Link>
            </li>
            <li>
                <Link to='/animalGallery'>Gallery</Link>
            </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;