import { NavLink } from 'react-router-dom';
import LoginIcon from '../assets/icons/Login';
import OrderIcon from '../assets/icons/Order';
import ProfilIcon from '../assets/icons/Profil';

const Header = () => (
  <header className="shadow-md px-6 py-3 rounded-md bg-white flex justify-start items-center">
    <nav className="flex-grow">
      <ul className="flex">
        <li className="linkItem">
          <NavLink
            to="/profil"
            className={({ isActive }) => (isActive ? 'activeItem' : undefined)}>
            <ProfilIcon />
            Profil
          </NavLink>
        </li>
        <li className="linkItem">
          <NavLink
            to="/order"
            className={({ isActive }) => (isActive ? 'activeItem' : undefined)}>
            <OrderIcon />
            Commande
          </NavLink>
        </li>
        <li className="linkItem ">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'activeItem' : undefined)}>
            <LoginIcon />
            Connexion
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;