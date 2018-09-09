import React from 'react'
import { GithubPicker } from 'react-color'

class ColorPicker extends React.Component {
    state = {
        backgroundColor: "fff"
    }
    handleChangeComplete = (color) => {
        console.log(`colorpicker`, color);
        this.props.getColor(color);
        this.setState ({
            backgroundColor: color.hex
        });
    }
    render() {
        return <GithubPicker onChangeComplete={ this.handleChangeComplete } />
    }
}

export default ColorPicker;