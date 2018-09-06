import React, { Component } from 'react';

class ToolsSocial extends Component {
    render() {
        return  <div className="tools__container--social__selection">
                <h1>ToolsSocial</h1>

                    <form>
                        <input type="checkbox" name="social" value="email" />
                        Email 
                        <input type="email" name="social" placeholder="Enter email"/>

                        <input type="checkbox" name="social" value="twitter" /> Twitter
                        <input type="text" placeholder="Enter Twitter username" maxLength="20" />

                        <input type="checkbox" name="social" value="github" /> 
                        Github
                        <input type="text" placeholder="Enter Github username" maxLength="20" />

                        <input type="checkbox" name="social" value="linkedin" /> 
                        Linkedin
                        <input type="text" placeholder="Enter Linkedin username" maxLength="20" />

                        <input type="submit" />
                
                    </form>
                </div>
            
        
    }
}

export default ToolsSocial;