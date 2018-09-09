import React, { Component } from 'react';

class HTMLView extends Component {
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