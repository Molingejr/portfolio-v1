import React, { Component } from 'react';

class Contact extends Component{
    render(){
    
        return (
            <section id="contact" className="contact">
                <div className="section-heading contact__heading">
                     Get In Touch
                </div>

                <div class="contact__message">
                    My inbox is always open in case you want to have a chat or just want to say hi.
                </div>

                <a href="mailto:molingejr@gmail.com" target="_blank" className="btn">Send a message</a>
               
            </section>
        )
    }
}

export default Contact;