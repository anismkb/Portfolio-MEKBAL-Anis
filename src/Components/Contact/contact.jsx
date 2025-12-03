import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="title">
                <h1> Contact </h1>
                <p className="subtitle"> Feel free to reach out </p>
                <hr class="blue-line" />
            </div>
            <div className="Formcontainer">
                <div className="contactform">
                    <form action="" method="post">
                        <div className="form">
                            <div className="name">
                                <label htmlFor="name"> Name </label>
                                <div className="input">
                                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                                </div>
                                
                            </div>
                            <div className="email">
                                <label htmlFor="email"> Email </label>
                                <div className="input">
                                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="message">
                                <label htmlFor="message"> Message </label>
                                <div className="input">
                                    <textarea id="message" name="message" placeholder="Your Massage" rows="5" required></textarea>
                                </div>
                            </div>
                            
                            <button type="submit"> Send Message </button>
                        </div>
                        
                    </form>
                </div>
                <div className="references">
                    <h2> Get In Touch </h2>

                </div>
                
            </div>
        </div>
    )
}

export default Contact;