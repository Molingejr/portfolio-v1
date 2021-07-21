import React, { Component } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import richtextRenderer from '../utils/richtextRenderer';

class Contact extends Component{
    render(){
    
        return (
            <div className="contact">
                <div className="contact__heading">
                     Get In Touch
                </div>

                <div class="contact__message">
                    My inbox is always open in case you want to have a chat or just want to say hi.
                </div>

                <button className="btn">Send a message</button>
               
            </div>
        )
    }
}

export default Contact;