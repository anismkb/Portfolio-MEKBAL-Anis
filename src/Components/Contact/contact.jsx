import React from "react";
import "./contact.css";
import { MdSend, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
// Importez les images directement
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// Corrigez l'icône par défaut de Leaflet avec les imports
let DefaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: shadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const googleMapsUrl = "https://www.google.fr/maps/place/Brest/@48.4084422,-4.4995852,12z/data=!3m1!4b1!4m6!3m5!1s0x4816bbe1d9925b93:0xc6488358179c30ab!8m2!3d48.3899275!4d-4.4855959!16zL20vMGZ3Zm0?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";

const Contact = () => {
    return (
        <div className="contact">
            <div className="title">
                <h1> Contact </h1>
                <p className="subtitle"> Feel free to reach out </p>
                <hr className="blue-line" />
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
                            
                            <button type="submit"> <MdSend size={18} />  Send Message </button>
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
                    <div className="maps" style={{ height: '300px', width: '100%' }}>
                        <a 
                            href={googleMapsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="map-expand-button"
                        >
                            Agrandir le plan
                        </a>
                        <MapContainer 
                            center={[48.3904, -4.4869]}
                            zoom={12} 
                            scrollWheelZoom={false}
                            style={{ height: '300px', width: '100%' }}
                        >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[48.41, -4.4950]}>

                        </Marker>
                        </MapContainer>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;