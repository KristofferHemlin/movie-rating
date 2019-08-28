import React from 'react';
import App from '../App';
import AddReview from '../components/AddReview/AddReview';
import Notfound from '../components/Notfound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class AppRouter extends React.Component {

    render() {
        return (
            <div>                
                <Router>
            <div>       
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/AddReview" component={AddReview}></Route>
                    <Route component={Notfound}></Route>
                </Switch>
            </div>
        
            </Router>
            </div>
        )
    }
}

export default AppRouter;