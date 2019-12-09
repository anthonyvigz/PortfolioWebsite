import React, { Component, useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/contact.css';
import { Spring } from 'react-spring/renderprops';
import * as emailjs from 'emailjs-com'

class Contact extends Component {
  constructor(props) {
      super();
      this.state = {
          name: '',
          email: '',
          message: ''
      }
  }

  changeHandler = event => {
      event.preventDefault();

      this.setState({
          [event.target.name]: event.target.value
      })
  }

  sendMessage = event => {
      event.preventDefault();
      
      const { name, email, message } = this.state;

      let templateParams = {
        name: name,
        message: message,
        email: email,
       }

       emailjs.send(
        'gmail',
        'template_SPqTzvPP',
         templateParams,
        'user_ok070rGofhMku7T0N56rz'
       )

       this.setState({ name: '', email: '', message: '' });
}


  render() {
    return (
        <AbsoluteWrapper>
          <div className="contactBlock">
            <h5 className="projectsHeader">Contact</h5>
            <h5 className="emptyBorder"></h5>
            <h7>Have a question or want to work together?</h7>
            <form onSubmit={this.sendMessage} className="contactForm">
              <input onChange={this.changeHandler} name="name" type="text" placeholder="Name"></input>
              <input  onChange={this.changeHandler} name="email" type="text" placeholder="email"></input>
              <textarea onChange={this.changeHandler} name="message" rows="4" cols="50" type="text" placeholder="Your message" rows="4" cols="50"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </AbsoluteWrapper>
    );
  }
}

export default Contact;
