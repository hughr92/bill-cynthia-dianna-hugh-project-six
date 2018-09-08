import React, { Component } from 'react';

class CSSView extends Component {
    render() { 
        return (
            <div className="view view__css">
                <h1 className="view__title view__title--css">CSSView</h1>
                {/* h1 */}
                <div className="view__container">
                    <p className="view__css--element">{`h1`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`color : black`}</p>
                    <p className="view__css--property">{`font-size : 20`}</p>
                    <p className="view__css--property">{`font-family : sans`}</p>
                    <p className="view__css--property">{`text-align : center`}</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* h2 */}
                <div className="view__container">
                    <p className="view__css--element">{`h2`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`color : black`}</p>
                    <p className="view__css--property">{`font-size : 20`}</p>
                    <p className="view__css--property">{`font-family : sans`}</p>
                    <p className="view__css--property">{`text-align : center`}</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* icons */}
                <div className="view__container">
                    <p className="view__css--class">{`.icons`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`color : black`}</p>
                    <p className="view__css--property">{`font-size : 20`}</p>
                    <p className="view__css--property">{`text-align : center`}</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
                {/* background */}
                <div className="view__container">
                    <p className="view__css--class">{`.background`}<span className="view__css--element--start">{`{`}</span></p>
                    <p className="view__css--property">{`backgroundcolor : black`}</p>
                    <p className="view__css--end">{`}`}</p>
                </div>
            </div>
        )
    }
}

export default CSSView;