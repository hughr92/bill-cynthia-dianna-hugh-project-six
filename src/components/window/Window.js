import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import LiveView from './LiveView'
import HTMLView from './HTMLView'
import CSSView from './CSSView'

class Window extends Component {
    
    constructor(){
        super();
        this.state = {
            view: 'live',
        }
    }

    handleChange = (e) => {
        console.log(e.target.id);
        this.setState({
            view: e.target.id
        })
        
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li className="windowChanger">
                            <button onClick={this.handleChange} id="live" className="windowChanger--button">Live</button>
                        </li>
                        <li className="windowChanger">
                            <button onClick={this.handleChange} id="html" className="windowChanger--button">HTML</button>
                        </li>
                        <li className="windowChanger">
                            <button onClick={this.handleChange} id="css" className="windowChanger--button">CSS</button>
                        </li>
                    </ul>
                    
                    {this.state.view === 'live' && (
                        <LiveView user={this.props.user}/>
                    )}
                    {this.state.view === 'html' && (
                        <HTMLView user={this.props.user}/>
                    )}
                    {this.state.view === 'css' && (
                        <CSSView user={this.props.user}/>
                    )}
                    {/* <Route exact path="/home/bui" component={LiveView} />
                    <Route exact path="/home/" component={HTMLview} />
                    <Route exact path="/home/templates" component={CSSView} /> */}
                </div>
            </Router>
        )
    }
}

export default Window; 