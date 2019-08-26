import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className="background">
                <h3 className="title">Movie Rating</h3>
                        <Link to="/">Home</Link><br/>
                        <Link to="/AddReview">Add Review</Link>
            </div>
        )
    }
}

export default Header;