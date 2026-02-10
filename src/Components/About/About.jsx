import React, { useState } from "react";
import "./About.css";
import cvData from '../../Data/cvData.js';
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { FaRobot } from "react-icons/fa";
const About = () => {

    const { ref, visible } = useScrollAnimation();
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey there! I’m Anis AI assistant 👨‍💻, here to help you learn more about his work, skills, and projects. Ask me anything!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Ton CV sous forme de texte pour le prompt
    const cvText = `
        NOM: ${cvData.nom}
        TITRE: ${cvData.titre}
        LOCALISATION: ${cvData.localisation}
        DESCRIPTION: ${cvData.description}

        CONTACT:
        - Téléphone: ${cvData.contact.telephone}
        - Email: ${cvData.contact.email}
        - LinkedIn: ${cvData.contact.linkedin}
        - GitHub: ${cvData.contact.github}

        COMPÉTENCES TECHNIQUES:
        - Langages de programmation: ${cvData.competences.langages.join(", ")}
        - Backend: ${cvData.competences.backend.join(", ")}
        - Frontend: ${cvData.competences.frontend.join(", ")}
        - Mobile: ${cvData.competences.mobile.join(", ")}
        - API: ${cvData.competences.api.join(", ")}
        - Bases de données: ${cvData.competences.basesDonnees.join(", ")}
        - DevOps & Industrialisation: ${cvData.competences.devops.join(", ")}
        - Méthodologies: ${cvData.competences.methodologies.join(", ")}
        - Tests & Qualité: ${cvData.competences.tests.join(", ")}

        EXPÉRIENCES PROFESSIONNELLES:
        ${cvData.experiences.map(exp => `
        ${exp.poste}
        Entreprise: ${exp.entreprise} - ${exp.lieu}
        Période: ${exp.periode}
        Missions:
        ${exp.missions.map(mission => `  • ${mission}`).join("\n")}
        Technologies utilisées: ${exp.technologies.join(", ")}
        `).join("\n\n")}

        FORMATIONS:
        ${cvData.formations.map(formation => `
        ${formation.diplome}
        Établissement: ${formation.etablissement}
        Période: ${formation.periode}
        `).join("\n")}

        LANGUES:
        ${cvData.langues.map(langue => `- ${langue.langue}: ${langue.niveau}`).join("\n")}

        CENTRES D'INTÉRÊT: ${cvData.centresInteret.join(", ")}
    `;

    
    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { id: messages.length + 1, text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        
        const userQuestion = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userQuestion,
                    cvText: cvText
                }),
            });

            const data = await response.json();

            const botMessage = {
            id: messages.length + 2,
            text: data.reply,
            sender: 'bot'
            };
            
            setMessages(prev => [...prev, botMessage]);
            
        } catch (error) {
            console.error('Erreur:', error);
            const errorMessage = { 
            id: messages.length + 2, 
            text: "Désolé, une erreur technique s'est produite. Veuillez réessayer.", 
            sender: 'bot' 
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
        }
    };

    const suggestedQuestions = [
        "What is your professional experience ?",
        "How can I contact you ?"
    ];

  return (
    <div className='about' ref={ref}>
        <div className={`title scroll-title ${visible ? "show":""}`}>
            <h1> About me </h1>
            <p className="subtitle">Quick review</p>
            <hr className="blue-line" />
        </div>
        
        <div className={`cv-chatbot ${visible ? "show" : ""}`}>
            <div className="chat-header">
                <h3>
                    <FaRobot className="chat-icon" />
                    Ask My AI Assistance
                </h3>
            </div>

            <div className="messages-container">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        <div className="message-bubble">
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                <div className="message bot">
                    <div className="message-bubble typing">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                )}
            </div>

            <div className="suggested-questions">
                {suggestedQuestions.map((question, idx) => (
                <button
                    key={idx}
                    className="suggestion-btn"
                    onClick={() => setInput(question)}
                    disabled={isLoading}
                >
                    {question}
                </button>
                ))}
            </div>

            <div className="input-area">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about skills, projects or experience ..."
                    disabled={isLoading}
                    rows="2"
                />
                <button 
                    onClick={handleSend} 
                    disabled={isLoading || !input.trim()}
                    className="send-btn"
                >
                {isLoading ? '...' : 'Send'}
                </button>
            </div>

            <div className="chat-footer">
                <small></small>
            </div>
        </div>
        
    </div>
  );
}

export default About;