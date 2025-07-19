import "./NavBAr.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__title">
        <a href="/" className="nav__link">
          MyNotes App
        </a>
      </h1>
      <ul className="nav__items">
        <li className="nav__item">
          <a href="#!" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/Create" className="nav__link">
            Create Note
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
