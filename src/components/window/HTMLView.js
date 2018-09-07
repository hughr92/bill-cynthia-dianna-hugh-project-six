import React, { Component } from 'react';

class HTMLView extends Component {
    render() {
        return (
            <div className="view view__html">
                <h1 className="view__title view__title--html">HTML View</h1>
                <div className="view__html__head">
                    <p className="view__html__head--doctype">!DOCTYPE</p>
                    <p>
                        <span className="view__html__head--element">html</span> <span className="view__html__head--property">lang</span> = <span className="view__html__head--attribute">en</span>
                    </p>

                    <span className="view__html__head--element view__html__head--element--start">head</span>

                    <p className="indent-1">
                        <span className="view__html__head--element">meta</span> <span className="view__html__head--property">name</span>=<span className="view__html__head--attribute">viewport</span> <span className="view__html__head--property">content</span>=<span className="view__html__head--attribute">width=device-width, initial-scale=1.0</span>
                    </p>

                    <p className="indent-1">
                        <span className="view__html__head--element">meta</span> <span className="view__html__head--property">http-equiv</span>=<span className="view__html__head--attribute">X-UA-Compatible</span> <span className="view__html__head--property">content</span>=<span className="view__html__head--attribute">ie=edge</span>
                    </p>

                    {/* google fonts */}

                    <p className="indent-1">
                        <span className="view__html__head--element">link</span> <span className="view__html__head--property">href</span>=<span className="view__html__head--attribute">https://fonts.googleapis.com/css?family={`VARIABLE`}|{`VARIABLE`}</span> <span className="view__html__head--property">rel</span>=<span className="view__html__head--attribute">stylesheet</span>
                    </p>


                    {/* styles */}


                    <p className="indent-1">
                        <span className="view__html__head--element">link</span> <span className="view__html__head--property">rel</span>=<span className="view__html__head--attribute">stylesheet</span> <span className="view__html__head--property">href</span>=<span className="view__html__head--attribute">styles/style.css</span>
                    </p>



                    <p className="indent-1"><span className="view__html__head--element--inline view__html__head--element--inline--start">title</span> title <span className="view__html__head--element--inline view__html__head--element--inline--end">title</span></p>
                    

                    <p>
                        <span className="view__html__head--element view__html__head--element--end">head</span>
                    </p>
                </div>

                {/* body */}

                <p>
                    <span className="view__html__head--element">body</span> <span className="view__html__head--property">class</span> = <span className="view__html__head--attribute">background</span>
                </p>



                <p className="indent-1"><span className="view__html__head--element--inline view__html__head--element--inline--start">h1</span> {`TITLE VAR HERE`} <span className="view__html__head--element--inline view__html__head--element--inline--end">h1</span></p>

                <p className="indent-1"><span className="view__html__head--element--inline view__html__head--element--inline--start">h2</span> {`SUBTITLE VAR HERE`} <span className="view__html__head--element--inline view__html__head--element--inline--end">h2</span></p>

                <p>
                    <span className="view__html__head--element view__html__head--element--end">body</span>
                </p>



                <p>
                    <span className="view__html__head--element view__html__head--element--end">html</span>
                </p>
            </div>
        )
    }
}

export default HTMLView;