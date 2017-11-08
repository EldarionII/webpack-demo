import React from 'react'
import {BrowserRouter,Router,Route, Switch, Redirect} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import NoMatch from './components/no-match'
import Home from './components/home'


export default class Routes extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/home"} component={Home}/>
                    <Route path="/404" component={NoMatch} />
                    <Redirect exact from="/" to="/home" />
                    <Redirect from="*" to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}