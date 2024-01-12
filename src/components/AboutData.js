import { Component } from 'react';
import '../styles/About.css'
import podMic from '../assets/brandit_podcast_mic.png'

class AboutData extends Component {
    render(){
        return(
            <div className='firstAbout'>
            <div className='textAbout'>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text} </p>
        </div>
        <div className='imageAbout'>
            <img alt='brandit. microphone' src={this.props.img1} />
            {/* <img alt='brandit. microphone' src={this.props.img2} /> */}
            </div>
        </div>
        )
    }
}

export default AboutData