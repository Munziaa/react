import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'


function Header({text = "Default Text", bgColor = "rgba(0,0,0,0.4)", txtColor = "#ff6a95"}) {

  const headerStyles = {
    backgroundColor: bgColor,
    color: txtColor,
  }

  return (
    <header style={headerStyles}>
        <div className="container">
          <NavLink to="/" className="header-link">
            
              <h2>
                    {text}
                </h2>
          
          </NavLink>
          </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  txtColor: PropTypes.string,
}

export default Header