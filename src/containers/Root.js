import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from '../redux/configureStore'
import App from './App'
import ViewPost from './ViewPost'

// Configure redux store
const store = configureStore()

// Base of the app
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
					<Route exact path="/" component={App} />
					<Route path="/view/:subreddit/:subredditID" component={ViewPost} />
			    </Router>
            </Provider>
        )
    }
}