import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../utill/images/logo.svg'
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    state = {
        isOpen: false
    }
    
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <nav className='navbarr'>
             <div className="nav-center">
              <div className="nav-header">
                <Link to='/'>
                <img src={logo} alt="logo"/>
                </Link>
                <button onClick={() => this.handleToggle()} className='nav-btn' type='button'>
                    <FaAlignRight className='nav-icon' />
                </button>
                </div>
              <ul className={this.state.isOpen? "nav-links show-nav": "nav-links"}>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/rooms'>Rooms</Link></li>
              </ul>
             </div>
            </nav>
        );  
        
    }
}

export default NavBar;
