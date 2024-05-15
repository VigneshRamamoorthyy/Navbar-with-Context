import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const backgroundColor = isDarkTheme ? 'background-dark' : ''
      const textColor = isDarkTheme ? 'light-text' : ''

      return (
        <>
          <Navbar />
          <div className={`notfound-container ${backgroundColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="notfound-img"
              alt="not found"
            />
            <h1 className={`notfound-header ${textColor}`}>Lost Your Way? </h1>
            <p className={`notfound-description ${textColor}`}>
              We cannot seem to find the page that you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
