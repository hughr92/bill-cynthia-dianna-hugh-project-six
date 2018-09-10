import React, { Component } from 'react'
import firebase from "../firebase";


class Template extends Component {
    constructor() {
        super();
        this.state = {
            cool: {
            //one
            coolOne: {
                background: {
                image: false,
                color: "#829BF1"
                },
        
                text: {
                h2: {
                    textContent: "h1 Spectral, h2 Karla",
                    size: null,
                    fontFamily: "Karla",
                    color: "#332287",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Spectral",
                    color: "#4E34D0",
                    alignment: "center"
                }
                }
            },
        
            //two
            coolTwo: {
                background: {
                image: false,
                color: "#F9E16B"
                },
        
                text: {
                h2: {
                    textContent: "h1 Frank Ruhl Libre, h2 Frank Ruhl Libre",
                    size: null,
                    fontFamily: "Frank Ruhl Libre",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Frank Ruhl Libre",
                    color: "#564BE6",
                    alignment: "center"
                }
                }
            },
        
            //three
            coolThree: {
                background: {
                image: false,
                color: "#B3B6FA"
                },
        
                text: {
                h2: {
                    textContent: "h1 Lora, h2 Karla",
                    size: null,
                    fontFamily: "Karla",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    size: null,
                    fontFamily: "Lora",
                    color: "#FB3F4E",
                    alignment: "center"
                }
                }
            },
        
            //four
            coolFour: {
                background: {
                image: false,
                color: "#98D0FA"
                },
        
                text: {
                h2: {
                    textContent: "h1 Muli, h2 Muli",
                    size: null,
                    fontFamily: "Muli",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Muli",
                    color: "#F93E4D",
                    alignment: "center"
                }
                }
            },
        
            //five
            coolFive: {
                background: {
                image: false,
                color: "#3D7AE4"
                },
        
                text: {
                h2: {
                    textContent: "h1 Poppins, h2 PT Serif",
                    size: null,
                    fontFamily: "PT Serif",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Poppins",
                    color: "#3322D2",
                    alignment: "center"
                }
                }
            },
        
            //six
            coolSix: {
                background: {
                image: false,
                color: "#8937E7"
                },
        
                text: {
                h2: {
                    textContent: "h1 Space Mono, h2 Space Mono",
                    size: null,
                    fontFamily: "Space Mono",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Space Mono",
                    color: "#85B6DB",
                    alignment: "center"
                }
                }
            }
            },
        
            //WARM TEMPLATES
            warm: {
            //one
            warmOne: {
                background: {
                image: false,
                color: "#FC8328"
                },
        
                text: {
                h2: {
                    textContent: "h1 Rubik, h2 Rubik",
                    size: null,
                    fontFamily: "Rubik",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Rubik",
                    color: "#641926",
                    alignment: "center"
                }
                }
            },
        
            //two
            warmTwo: {
                background: {
                image: false,
                color: "#FCDF5B"
                },
        
                text: {
                h2: {
                    textContent: "h1 Raleway, h2 Raleway",
                    size: null,
                    fontFamily: "Raleway",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Raleway",
                    color: "F58B23",
                    alignment: "center"
                }
                }
            },
        
            //three
            warmThree: {
                background: {
                image: false,
                color: "#FF2E00"
                },
        
                text: {
                h2: {
                    textContent: "h1 Roboto, h2 Roboto",
                    size: null,
                    fontFamily: "Roboto",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Roboto",
                    color: "#FFC400",
                    alignment: "center"
                }
                }
            },
        
            //four
            warmFour: {
                background: {
                image: false,
                color: "#FD717A"
                },
        
                text: {
                h2: {
                    textContent: "h1 Playfair, h2 Karla",
                    size: null,
                    fontFamily: "Karla",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Playfair",
                    color: "#E1005A",
                    alignment: "center"
                }
                }
            },
        
            //five
            warmFive: {
                background: {
                image: false,
                color: "#FBB623"
                },
        
                text: {
                h2: {
                    textContent: "h1 Lora, h2 Roboto",
                    size: null,
                    fontFamily: "Roboto",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Lora",
                    color: "#6D778B",
                    alignment: "center"
                }
                }
            },
        
            //six
            warmSix: {
                background: {
                image: false,
                color: "#F73A00"
                },
        
                text: {
                h2: {
                    textContent: "h1 Spectral, h2 Spectral",
                    size: null,
                    fontFamily: "Spectral",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Spectral",
                    color: "#292F5E",
                    alignment: "center"
                }
                }
            }
            },
        
            // INTENSE TEMPLATES
            intense: {
            //one
            intenseOne: {
                background: {
                image: false,
                color: "#FEE817"
                },
        
                text: {
                h2: {
                    textContent: "h1 Archivo Black, h2 Roboto",
                    size: null,
                    fontFamily: "Roboto",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Archivo Black",
                    color: "#FF30B2",
                    alignment: "center"
                }
                }
            },
        
            //two
            intenseTwo: {
                background: {
                image: false,
                color: "#00BF00"
                },
        
                text: {
                h2: {
                    textContent: "h1 Halant, h2 Nunito Sans",
                    size: null,
                    fontFamily: "Nunito Sans",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Halant",
                    color: "#3DA1FF",
                    alignment: "center"
                }
                }
            },
        
            //three
            intenseThree: {
                background: {
                image: false,
                color: "#ED0036"
                },
        
                text: {
                h2: {
                    textContent: "h1 Alegreya, h2 Alegreya",
                    size: null,
                    fontFamily: "Alegreya",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Alegreya",
                    color: "#DFCF9F",
                    alignment: "center"
                }
                }
            },
        
            //four
            intenseFour: {
                background: {
                image: false,
                color: "#FF0E64"
                },
        
                text: {
                h2: {
                    textContent: "h1 Chivo, h2 Overpass",
                    size: null,
                    fontFamily: "Overpass",
                    color: "#FFE842",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Chivo",
                    color: "#25C4FF",
                    alignment: "center"
                }
                }
            },
        
            //five
            intenseFive: {
                background: {
                image: false,
                color: "#391696"
                },
        
                text: {
                h2: {
                    textContent: "h1 Domine, h2 Open Sans",
                    size: null,
                    fontFamily: "Open Sans",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Domine",
                    color: "#FF4E00",
                    alignment: "center"
                }
                }
            },
        
            //six
            intenseSix: {
                background: {
                image: false,
                color: "#00BD4C"
                },
        
                text: {
                h2: {
                    textContent: "h1 Dosis, h2 Dosis",
                    size: null,
                    fontFamily: "Dosis",
                    color: "#000",
                    alignment: "center"
                },
                h1: {
                    textContent: "",
                    size: null,
                    fontFamily: "Dosis",
                    color: "#FF0000",
                    alignment: "center"
                }
                }
            }
            }
        
        }
    }

    componentDidMount = () => {
        console.log('yay?');
        // firebase.database().ref('/templates').push(this.state)
        const dbRef = firebase.database().ref("/templates")
        dbRef.push(this.state);
    }



    render() {
        return (
            <div>
                
            </div>
        );
    }
}


export default Template;





