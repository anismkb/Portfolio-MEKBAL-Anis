import React, { useState } from "react";
import "./About.css";
import "./CVChatbot.css";
import ANIS from '../../assets/ANIS.jpg';
import cvData from '../../Data/cvData.js';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaSitemap} from "react-icons/fa";

const About = () => {
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
            const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
            {
                method: 'POST',
                headers: { 
                'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                contents: [{
                    parts: [{ 
                    text: `Tu es un assistant professionnel qui répond aux questions sur le CV de Anis Mekbal.
                    
                    CONTEXTE DU CV:
                    ${cvText}
                    
                    QUESTION DU RECRUTEUR: ${userQuestion}
                    
                    RÈGLES DE RÉPONSE:
                    1. Réponds UNIQUEMENT basé sur les informations du CV
                    2. Sois précis et concis
                    3. Utilise un français professionnel
                    4. Réponds en français
                    5. Si l'information n'est pas dans le CV, dis que tu ne sais pas
                    6. Utilise des puces simples "•" pour les listes si nécessaire
                    7. Va à la ligne naturellement entre les paragraphes
                    8. Sois concis et précis
                    
                    
                    RÉPONSE PROFESSIONNELLE:`
                    }]
                }],
                generationConfig: {
                    maxOutputTokens: 700,  // Limite la longueur
                    temperature: 0.4,      // Créativité (0-1)
                    topP: 0.8,
                    topK: 40
                }
                })
            }
            );

            const data = await response.json();
            
            console.log('Réponse Gemini 2.5:', data); // Pour déboguer
            
            let botResponse = "Désolé, je n'ai pas pu générer une réponse.";
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            botResponse = data.candidates[0].content.parts[0].text;
            } else if (data.error) {
            botResponse = `Erreur: ${data.error.message}`;
            }
            
            const botMessage = { 
            id: messages.length + 2, 
            text: botResponse, 
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
        "Quelle est ton expérience professionnelle ?",
        "Comment puis-je te contacter ?"
    ];

  return (
    <div className='about'>
        <div className="title">
            <h1> About me </h1>
            <p className="subtitle">Quick review</p>
            <hr className="blue-line" />
        </div>
        
        {/* new */}
        <div className="cv-chatbot">
            <div className="chat-header">
                <h3>🤖 Ask My AI Assistance</h3>
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
                {isLoading ? '...' : 'Envoyer'}
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