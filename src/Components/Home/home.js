import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            word: 'paradise'
        }
        this.backgroundSlider = this.backgroundSlider.bind(this)
    }

    componentDidMount() {
        this.backgroundSlider()
    }

    backgroundSlider() {
        const background = document.getElementById('background')
        background.className = "header-background-1"
        this.setState({ word: 'Paradise' })
        window.setTimeout(() => {
            background.className = "header-background-2"
            this.setState({ word: 'Adventure' })
            window.setTimeout(() => {
                this.setState({ word: 'Relaxation' })
                background.className = "header-background-3"
                window.setTimeout(() => {
                    this.setState({ word: 'Wonder' })
                    background.className = "header-background-4"
                    window.setTimeout(() => {
                        this.setState({ word: 'Zen' })
                        background.className = "header-background-5"
                    }, 5000)
                }, 5000)
            }, 5000)
        }, 5000)
        window.setInterval(this.backgroundSlider, 25000)
    }

    // window.setInterval(function(){    
    //     window.setTimeout(function(){
    //         $('div').css('background-image','url(background.jpg)');
    //     },100);
    //      $('div').css('background-image','url(background_n.jpg)');
    //  },10000);

    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-box">
                        <h2>My Rooms</h2>
                    </div>
                    <div className="top-bar-box">
                        <h2>Sign In</h2>
                    </div>
                    <div className="top-bar-box">
                        <h2>Join</h2>
                    </div>
                </div>
                <div className="header-bar">
                    <img src="http://www.imperialhotelostrava.com/files/img/logo-imperial-hotel-ostrava.png" />
                    <div className="header-box">
                        <h1>Offers</h1>
                    </div>
                    <div className="header-box">
                        <h1>Events</h1>
                    </div>
                    <div className="header-box">
                        <h1>Resorts</h1>
                    </div>
                    <div className="header-box">
                        <h1>About</h1>
                    </div>
                </div>
                <div className="header-background-1" id='background'>
                    <div className="header-title">
                        <div className="title">
                            <p>Find your</p>
                        </div>
                        <div className="word">
                            <p>{this.state.word}</p>
                        </div>
                    </div>
                </div>
                <div className="home-main">
                    <div className="left-bar" />
                    <div className="right-bar" />
                    <div className="features-box-1">
                        <div className="feature-1">
                        </div>
                        <div className="feature-2">
                        </div>
                        <div className="feature-3">
                        </div>
                    </div>
                    <div className="features-box-2">
                        <div className="feature-4">
                        </div>
                        <div className="feature-5">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}