import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className="background">
                <h3 className="title">Movie Rating</h3>
                <ul className="list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AddReview">Add Review</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;