import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import MangaDescription from './MangaDescription'

export default function MyRouter() {
    return (
        <Router>
            <Navbar />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/manga/:id" component={MangaDescription} />
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}
