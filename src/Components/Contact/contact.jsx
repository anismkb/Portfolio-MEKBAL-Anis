import React, { useState } from "react"; // Importez useState
import "./contact.css";
import { MdSend, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';
import useScrollAnimation from "../../hooks/useScrollAnimation";

let DefaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: shadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const googleMapsUrl = "https://www.google.fr/maps/place/Brest/@48.4084422,-4.4995852,12z/data=!3m1!4b1!4m6!3m5!1s0x4816bbe1d9925b93:0xc6488358179c30ab!8m2!3d48.3899275!4d-4.4855959!16zL20vMGZ3Zm0?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";
const formActionUrl = "https://formspree.io/f/xvgejkel";

const Contact = () => {
    const { ref, visible } = useScrollAnimation(); 
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        setStatus("Sending..."); 

        try {
            const response = await fetch(formActionUrl, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json' 
                }
            });

            if (response.ok) {
                setStatus("Message sent successfully! Thank you!");
                form.reset(); 
            } else {
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
        <div className="contact" ref={ref}>
            <div className={`title scroll-title ${visible ? "show":""}`}>
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
                            <p onClick={()=>window.location.href="mailto:anismekbal2001@gmail.com"}> anismekbal2001@gmail.com</p>
                        </div>
                    </div>
                    <div className="Phone-Item">
                        <div className="icon-phone">
                            <MdPhone size={24} />
                        </div>
                        <div className="phone">
                            <p> Phone </p>
                            <p
                                className="phone-link"
                                onClick={() => window.location.href = "tel:+33602564167"}
                            >
                                +33 6 02 56 41 67
                            </p>
                        </div>
                    </div>

                    <div className="Location-Item">
                        <div className="icon-location">
                            <MdLocationOn size={24} />
                        </div>
                        <div className="location">
                            <p> Location </p>
                            <p
                                className="location-link"
                                onClick={() =>
                                    window.open(
                                    "https://www.google.com/maps/search/?api=1&query=Brest,France",
                                    "_blank"
                                    )
                                }
                            >
                                Brest, France
                            </p>
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