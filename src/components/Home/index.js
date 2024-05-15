import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const backgroundColor = isDarkTheme ? 'background-dark' : ''
      const textColor = isDarkTheme ? 'light-text' : ''
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`home-container ${backgroundColor}`}>
            <img src={homeImg} className="home-img" alt="home" />
            <h1 className={`home-text ${textColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
