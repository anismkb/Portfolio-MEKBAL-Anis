// src/data/cvData.js
const cvData = {
  nom: "Anis MEKBAL",
  titre: "Ingénieur Développement Logiciel",
  localisation: "Brest",
  contact: {
    telephone: "+33 602564167",
    email: "anismekbal2001@gmail.com",
    linkedin: "linkedin.com/in/anis-mekbal",
    github: "github.com/anismkb"
  },
  description: "Titulaire d'un Master 2 en Ingénierie Logicielle, je possède une solide expertise en développement web, mobile et backend. Ouvert, adaptable et motivé, je souhaite rejoindre une équipe dynamique afin d'apporter une réelle valeur ajoutée.",
  
  competences: {
    langages: ["C/C++", "C#", "JAVA", "Python", "Dart", "Go"],
    backend: [".Net (Framework, Core, 6/8/9)", "Django"],
    frontend: ["WPF", "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    mobile: ["Flutter", "Kotlin"],
    api: ["GraphQL", "REST"],
    basesDonnees: ["SQL Server", "MySQL", "Firebase"],
    devops: ["GitLab", "GitHub Actions", "Docker", "Git"],
    methodologies: ["Agile/Scrum", "UML", "Merise"],
    tests: ["JUnit", "Pytest", "TDD/BDD"]
  },
  
  experiences: [
    {
      poste: "Ingénieur Développement Logiciel (Stage fin d'étude)",
      entreprise: "Hutchinson",
      lieu: "Tours",
      periode: "04/2025 - 09/2025",
      missions: [
        "Développement front-end d'application conforme à la charte graphique",
        "Développement d'APIs RESTful pour le backend",
        "Rédaction de documentation technique",
        "Gestion des demandes de maintenance et correction de bugs",
        "Conception et développement de nouvelles fonctionnalités en C#",
        "Mise en place de pipeline CI/CD pour application Mobile"
      ],
      technologies: ["Flutter", "C#", ".Net", "WPF", "EntityFramework", "REST Api", "Sql Server", "Xcode", "Github", "CI/CD", "Jira"]
    },
    {
      poste: "Testeur et Développeur C/C++",
      entreprise: "ANEO",
      lieu: "Boulogne Billancourt",
      periode: "04/2024 - 09/2024",
      missions: [
        "Analyse complète du projet (fonctionnel et technique)",
        "Implémentation de tests unitaires et d'intégrations",
        "Développement d'une bibliothèque minimaliste",
        "Intégration dans trois outils de recompilation dynamique de code",
        "Mise en place de pipeline CI pour automatisation des tests"
      ],
      technologies: ["C/C++", "Python", "Pytest", "CMAKE", "Git", "CI"]
    },
    {
      poste: "Développeur .Net",
      entreprise: "CERIST",
      lieu: "Alger, Algérie",
      periode: "05/2023 - 08/2023",
      missions: [
        "Conception et gestion de base de données relationnelle",
        "Développement de fonctionnalités CRUD sécurisées",
        "Implémentation de moteur de recherche multi-critères",
        "Optimisation de requêtes SQL",
        "Gestion des rôles et permissions",
        "Conception d'architecture backend évolutive"
      ],
      technologies: ["ASP.Net Core", "Sql Server", "Elasticsearch", "Github", "MVC", "Microservices"]
    },
    {
      poste: "Développeur Web",
      entreprise: "CERIST",
      lieu: "Alger, Algérie",
      periode: "02/2022 - 06/2022",
      missions: [
        "Conception d'architecture logicielle avec UML",
        "Développement d'APIs RESTful",
        "Contribution au développement frontend",
        "Mise en place de moteur de recherche avec Elasticsearch",
        "Collaboration proactive avec l'équipe"
      ],
      technologies: ["Django", "React.js", "API REST", "Elasticsearch", "MySql", "GitHub", "CI/CD"]
    }
  ],
  
  formations: [
    {
      diplome: "Master Informatique, Logiciel pour les systèmes embarqués",
      etablissement: "Université de Bretagne Occidentale",
      periode: "2023-2025"
    },
    {
      diplome: "Master 1 en Informatique visuel",
      etablissement: "Université des sciences et de la technologie H-B",
      periode: "2019-2023"
    },
    {
      diplome: "Licence en Ingénierie des Systèmes d'Information et Logiciels",
      etablissement: "Université des sciences et de la technologie H-B",
      periode: "2019-2023"
    }
  ],
  
  langues: [
    { langue: "Français", niveau: "Courant" },
    { langue: "Anglais", niveau: "Intermediaire" },
    { langue: "Arabe", niveau: "Courant" }
  ],
  
  centresInteret: ["Football", "Natation", "Jeux vidéo"]
};

export default cvData;