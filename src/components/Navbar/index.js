import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)
      const backgroundColor = isDarkTheme ? 'nav-background-dark' : ''
      const textColor = isDarkTheme ? 'light-text' : ''
      const buttonImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const onToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`nav-container ${backgroundColor}`}>
          <div className="nav-responsive-container">
            <img src={logoImg} alt="website logo" className="website-logo" />
            <ul className="nav-item-container">
              <Link to="/" className="nav-link">
                <li className={`nav-item ${textColor}`}>Home</li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className={`nav-item ${textColor}`}>About</li>
              </Link>
            </ul>
            <button
              className="theme-button"
              type="button"
              data-testid="theme"
              onClick={onToggleTheme}
            >
              <img src={buttonImg} alt="theme" className="theme-img" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
