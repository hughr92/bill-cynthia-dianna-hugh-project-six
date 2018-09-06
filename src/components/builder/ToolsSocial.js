import React, { Component } from 'react';

class ToolsSocial extends Component {
    render() {
        return  <div className="tools__container--social__selection">
                <h1>ToolsSocial</h1>

                    <form>
                        <input type="checkbox" name="social" value="email" id="socialEmail"/>
                        <label for="socialEmail">Email</label>
                        <input type="email" name="social" placeholder="Enter email"/>

                        <input type="checkbox" name="social" value="twitter" id="socialTwitter" /> 
                        <label for="socialTwitter">Twitter</label>
                        <input type="text" placeholder="Enter Twitter username" maxLength="20" />

                        <input type="checkbox" name="social" value="github" id="socialGithub" /> 
                        <label for="socialGithub">Github</label>
                        <input type="text" placeholder="Enter Github username" maxLength="20" />

                        <input type="checkbox" name="social" value="linkedin" id="socialLinkedin" /> 
                        <label for="socialLinkedin">Linkedin</label>
                        <input type="text" placeholder="Enter Linkedin username" maxLength="20" />

                        <input type="submit" />
                
                    </form>
                </div>
            
        
    }
}

export default ToolsSocial;