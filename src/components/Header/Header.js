import React from 'react';
import css from './Header.module.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className={css.background}>
                <h3 className={css.title}>Movie Rating</h3>
                        <Link to="/">Home</Link><br/>
                        <Link to="/AddReview">Add Review</Link>
            </div>
        )
    }
}

export default Header;