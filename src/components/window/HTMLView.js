import React, { Component } from 'react';
import firebase from '../../firebase';

class HTMLView extends Component {

    constructor() {
        super();
        this.state = {
            user: "",
            userSelections: {
                background: {
                    backgroundColor: "",
                    user: ""
                },
                text: {
                    h2: {
                        size: null,
                        fontFamily: "",
                        color: "",
                        alignment: "",
                        textContent: ""

                    },
                    h1: {
                        size: null,
                        fontFamily: "",
                        color: "",
                        alignment: "",
                        textContent: ""

                    },
                },
                social: {
                    email: "",
                    github: "",
                    linkedin: "",
                    twitter: "",
                    user: ""
                }
            }
        }
    }
    componentDidMount = () => {
        const userID = this.props.user
        this.setState({
            user: userID
        }, () => {
            const dbRef = firebase.database().ref(this.state.user);
            dbRef.on('value', snapshot => {
                let dog = snapshot.val()
                console.log(`liveview`, snapshot.val());
                // if(snapshot.val()) {
                this.setState({
                    userSelections: dog
                    // {
                    //     background: snapshot.val().background,
                    //     text: snapshot.val().text,
                    //     social: snapshot.val().social
                    // }
                }, () => {
                    console.log(`setState`, this.state.userSelections.social.twitter);

                })
            })
        })
    }

    render() { 
        return (
            <div className="view view__html">
                <h1 className="view__title view__title--html">HTML View</h1>
                <div className="view__html__head">
                    <p className="view__html__head--doctype"><span className="view__html__start">{`<`}</span>!DOCTYPE<span className="view__html__end">{`>`}</span></p>
                    <p>
                        <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>html</span> <span className="view__html__head--property">lang</span> = <span className="view__html__head--attribute">"en"<span className="view__html__end">{`>`}</span></span>
                    </p>

                    <p className="view__html__head--element"><span className="view__html__start">{`<`}</span>head<span className="view__html__end">{`>`}</span></p>

                    <p className="indent-1">
                        <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>meta</span> <span className="view__html__head--property">name</span>=<span className="view__html__head--attribute">"viewport"</span> <span className="view__html__head--property">content</span>=<span className="view__html__head--attribute">"width=device-width, initial-scale=1.0"<span className="view__html__end">{`>`}</span></span>
                    </p>

                    <p className="indent-1">
                        <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>meta</span> <span className="view__html__head--property">http-equiv</span>=<span className="view__html__head--attribute">"X-UA-Compatible"</span> <span className="view__html__head--property">content</span>=<span className="view__html__head--attribute">"ie=edge"<span className="view__html__end">{`>`}</span></span>
                    </p>

                    {/* google fonts */}

                    <p className="indent-1">
                        <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>link</span> <span className="view__html__head--property">href</span>=<span className="view__html__head--attribute">"https://fonts.googleapis.com/css?family={`VARIABLE`}|{`VARIABLE`}"</span> <span className="view__html__head--property">rel</span>=<span className="view__html__head--attribute">"stylesheet"<span className="view__html__end">{`>`}</span></span>
                    </p>


                    {/* styles */}


                    <p className="indent-1">
                        <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>link</span> <span className="view__html__head--property">rel</span>=<span className="view__html__head--attribute">"stylesheet"</span> <span className="view__html__head--property">href</span>=<span className="view__html__head--attribute">"styles/style.css"<span className="view__html__end">{`>`}</span></span>
                    </p>



                    <p className="indent-1"><span className="view__html__head--element--inline view__html__head--element--inline--start"><span className="view__html__start">{`<`}</span>title<span className="view__html__end">{`>`}</span></span> title <span className="view__html__head--element--inline view__html__head--element--inline--end"><span className="view__html__start">{`</`}</span>title<span className="view__html__end">{`>`}</span></span></p>
                    

                    <p>
                        <span className="view__html__head--element view__html__head--element--end"><span className="view__html__start">{`<`}</span>head<span className="view__html__end">{`>`}</span></span>
                    </p>
                </div>

                {/* body */}

                <p>
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>body</span> <span className="view__html__head--property">class</span> = <span className="view__html__head--attribute">"background"</span><span className="view__html__end">{`>`}</span>
                </p>



                <p className="indent-1"><span className="view__html__head--element--inline view__html__head--element--inline--start"><span className="view__html__start">{`<`}</span>h1<span className="view__html__end">{`>`}</span></span> {`TITLE VAR HERE`} <span className="view__html__head--element--inline view__html__head--element--inline--end"><span className="view__html__start">{`</`}</span>h1<span className="view__html__end">{`>`}</span></span></p>

                <p className="indent-1"><span className="view__html__head--element--inline view__html__head--element--inline--start"><span className="view__html__start">{`<`}</span>h2<span className="view__html__end">{`>`}</span></span> {`SUBTITLE VAR HERE`} <span className="view__html__head--element--inline view__html__head--element--inline--end"><span className="view__html__start">{`</`}</span>h2<span className="view__html__end">{`>`}</span></span></p>


                {/* social */}
                <p className="indent-1">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>div</span> <span className="view__html__head--property">class</span> = <span className="view__html__head--attribute">"social"</span><span className="view__html__end">{`>`}</span>
                </p>
                {/* ul start */}
                <p className="indent-2">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>ul</span><span className="view__html__end">{`>`}</span>
                </p>

                {/* li */}
                <p className="indent-3">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>li</span><span className="view__html__end">{`>`}</span>
                    
                </p>

                <p className="indent-4">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>a<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"https://ca.linkedin.com/in/${`${this.state.userSelections.social.linkedin}`}"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>i<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"fab fa-linked-in"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>i</span><span className="view__html__end">{`>`}</span>
                    
                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>a</span><span className="view__html__end">{`>`}</span>
                </p>



                <p className="indent-3">

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>li</span><span className="view__html__end">{`>`}</span>
                </p>

                {/* li */}
                <p className="indent-3">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>li</span><span className="view__html__end">{`>`}</span>

                </p>

                <p className="indent-4">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>a<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"https://github.com/${`${this.state.userSelections.social.github}`}"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>i<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"fab fa-github"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>i</span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>a</span><span className="view__html__end">{`>`}</span>
                </p>



                <p className="indent-3">

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>li</span><span className="view__html__end">{`>`}</span>
                </p>

                {/* li */}
                <p className="indent-3">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>li</span><span className="view__html__end">{`>`}</span>

                </p>

                <p className="indent-4">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>a<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"mailto:${`${this.state.userSelections.social.email}`}"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>i<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"fab fa-envelope"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>i</span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>a</span><span className="view__html__end">{`>`}</span>
                </p>



                <p className="indent-3">

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>li</span><span className="view__html__end">{`>`}</span>
                </p>

                {/* li */}
                <p className="indent-3">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>li</span><span className="view__html__end">{`>`}</span>

                </p>

                <p className="indent-4">
                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>a<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"https://twitter.com/${`${this.state.userSelections.social.twitter}`}"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`<`}</span>i<span className="view__html__head--property">href</span> <span className="view__html--equals">=</span> <span className="view__html__head--attribute">{`"fab fa-twitter"`}</span></span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>i</span><span className="view__html__end">{`>`}</span>

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>a</span><span className="view__html__end">{`>`}</span>
                </p>



                <p className="indent-3">

                    <span className="view__html__head--element"><span className="view__html__start">{`</`}</span>li</span><span className="view__html__end">{`>`}</span>
                </p>


                {/* ul end */}
                <p className="indent-2">
                    <span className="view__html__head--element view__html__head--element--end"><span className="view__html__start">{`</`}</span>ul<span className="view__html__end">{`>`}</span></span>
                </p>

                <p className="indent-1">
                    <span className="view__html__head--element view__html__head--element--end"><span className="view__html__start">{`</`}</span>div<span className="view__html__end">{`>`}</span></span>
                </p>
                {/* end of body */}
                <p>
                    <span className="view__html__head--element view__html__head--element--end"><span className="view__html__start">{`</`}</span>body<span className="view__html__end">{`>`}</span></span>
                </p>



                <p>
                    <span className="view__html__head--element view__html__head--element--end"><span className="view__html__start">{`</`}</span>html<span className="view__html__end">{`>`}</span></span>
                </p>
            </div>
        )
    }
}

export default HTMLView;