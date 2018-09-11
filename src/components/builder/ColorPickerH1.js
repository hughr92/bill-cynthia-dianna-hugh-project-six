import React from 'react'
import { GithubPicker } from 'react-color'

class ColorPickerH1 extends React.Component {
    state = {
        h1Color: "fff"
    }
    handleChangeComplete = (color) => {
        this.props.getColorh1(color);
        this.setState({
            h1Color: color.hex
        });
    }
    render() {
        return <GithubPicker onChangeComplete={this.handleChangeComplete} />
    }
}

export default ColorPickerH1;