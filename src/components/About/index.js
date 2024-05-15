import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const backgroundColor = isDarkTheme ? 'background-dark' : ''
      const textColor = isDarkTheme ? 'light-text' : ''
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`about-container ${backgroundColor}`}>
            <img src={homeImg} className="about-img" alt="about" />
            <h1 className={`about-text ${textColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
