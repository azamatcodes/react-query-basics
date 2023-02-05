import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="top">
      <header className="header">
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/super-heroes">Super Heroes</Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header