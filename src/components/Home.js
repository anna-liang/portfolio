import React, { Component } from 'react'
import Typical from 'react-typical'
import '../styles/Home.css'
import backgroundVideo from '../media/background-video.mp4'

class Home extends Component {
    render () {
        return (
            <div className="background-video-container">
                <div className="background-video-overlay"></div>
                <div className="background-video">
                    <video
                        playsInline="playsinline"
                        autoPlay="autoplay"
                        muted="muted"
                        loop="loop"
                    >
                        <source src={backgroundVideo} type="video/mp4"/>
                    </video>
                </div>
                <div className="background-video-content" id="home">
                    <Typical
                        steps={['Anna Liang']}
                        wrapper='h1'
                        className="title"
                    />
                    <p className="description">I'm a software developer.</p>
                </div>
            </div>
        )
    }
}

export default Home;