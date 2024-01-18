import { Component } from 'react';
import '../styles/About.css'


class AboutData extends Component {
    render(){
        return(
            <div className={this.props.className}>
            <div className='textAbout'>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text} </p>
            <p>{this.props.text2}</p>
        </div>
        <div className='imageAbout'>
            <img alt='brandit. podmic' src={this.props.img1} />
            <img alt='brandit. rodecaster' src={this.props.img2} />
            </div>
        </div>
        )
    }
}

export default AboutData