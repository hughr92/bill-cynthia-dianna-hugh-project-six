import React from 'react'
import { GithubPicker } from 'react-color'

class ColorPickerH2 extends React.Component {
    state = {
        h2Color: "fff"
    }
    handleChangeComplete = (color) => {
        console.log(`colorpicker`, color);
        this.props.getColorh2(color);
        this.setState({
            h2Color: color.hex
        });
    }
    render() {
        return <GithubPicker onChangeComplete={this.handleChangeComplete} />
    }
}

export default ColorPickerH2;