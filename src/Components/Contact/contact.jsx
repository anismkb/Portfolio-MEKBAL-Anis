import React, { useState } from "react"; // Importez useState
import "./contact.css";
import { MdSend, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: shadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const googleMapsUrl = "https://www.google.fr/maps/place/Brest/@48.4084422,-4.4995852,12z/data=!3m1!4b1!4m6!3m5!1s0x4816bbe1d9925b93:0xc6488358179c30ab!8m2!3d48.3899275!4d-4.4855959!16zL20vMGZ3Zm0?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";
const formActionUrl = "https://formspree.io/f/xvgejkel";

// Mon composant est une fonction qui utilise des Hooks
const Contact = () => {
    const [status, setStatus] = useState(""); // État pour le message de statut (envoi/succès/erreur)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche la soumission classique (et la redirection)

        // Récupère l'élément du formulaire et les données
        const form = e.target;
        const data = new FormData(form);

        setStatus("Sending..."); // Afficher le statut d'envoi

        try {
            const response = await fetch(formActionUrl, {
                method: form.method,
                body: data,
                headers: {
                    // C'est la clé pour que Formspree réponde avec JSON
                    'Accept': 'application/json' 
                }
            });

            if (response.ok) {
                setStatus("Message sent successfully! Thank you!");
                form.reset(); // Efface les champs après un succès
            } else {
                // Tenter de lire le message d'erreur de Formspree si disponible
                const result = await response.json();
                if (result.errors) {
                    setStatus(result.errors.map(err => err.message).join(", "));
                } else {
                    setStatus("An error occurred. Please try again.");
                }
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus("Network error. Please try again.");
        }
    };


    return (
        <div className="contact">
            <div className="title">
                <h1> Contact </h1>
                <p className="subtitle"> Feel free to reach out </p>
                <hr className="blue-line" />
            </div>
            <div className="Formcontainer">
                <div className="contactform">
                    <form onSubmit={handleSubmit} method="post">
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
                                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                                </div>
                            </div>
                            
                            {/* Désactiver le bouton pendant l'envoi */}
                            <button type="submit" disabled={status === "Sending..."}> 
                                <MdSend size={18} style={{ marginRight: "8px" }} /> 
                                {status === "Sending..." ? "Sending..." : "Send Message"}
                            </button>
                            
                            {status && (
                                <p 
                                    className="form-status-message" 
                                    style={{ 
                                        color: status.includes("successfully") ? 'green' : 'red',
                                        marginTop: '10px'
                                    }}
                                >
                                    {status}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
                
                <div className="references">
                    <h2 className="titleRef"> Get In Touch </h2>
                    <div className="Email-Item">
                        <div className="icon-email">
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
                        </MapContainer>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;