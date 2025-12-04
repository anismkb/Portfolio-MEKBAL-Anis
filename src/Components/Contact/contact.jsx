import React from "react";
import "./contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

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
                    <h2 className="titleRef"> Get In Touch </h2>
                    <div className="Email-Item">
                        <div className="icon-circle">
                            <MdEmail size={24} />
                        </div>
                        <div className="email">
                            <p> Email </p>
                            <p> anismekbal2001@gmail.com</p>
                        </div>
                    </div>
                    <div className="Phone-Item">
                        <div className="icon-phone">
                            <MdPhone size={24} />
                        </div>
                        <div className="phone">
                            <p> Phone </p>
                            <p> +33 6 02 56 41 67</p>
                        </div>
                    </div>

                    <div className="Location-Item">
                        <div className="icon-location">
                            <MdLocationOn size={24} />
                        </div>
                        <div className="location">
                            <p> Location </p>
                            <p> Brest, France </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;