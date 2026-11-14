/* À charger APRÈS main.js : ajoute les traductions manquantes + menu mobile.
   main.js n'est pas modifié. */

if (typeof translations !== "undefined") {
Object.assign(translations.fr, {
    about_page_label: "À propos de NG Digital Tech",
    about_page_intro: "Découvrez mon activité, ma vision et mon approche de la transformation numérique.",
    about_who_label: "Qui suis-je ?",
    about_who_title: "Une activité dédiée aux solutions numériques",
    about_who_p1: "NG Digital Tech est une activité indépendante basée à Pointe-Noire, en République du Congo, qui propose des services numériques aux entreprises, commerces, entrepreneurs et organisations.",
    about_who_p2: "Mon objectif est d'aider les professionnels à développer leur présence en ligne, améliorer leur communication et exploiter les outils numériques pour mieux organiser leurs activités.",
    about_who_p3: "Les prestations sont réalisées à distance, avec une approche adaptée aux besoins et aux objectifs de chaque projet.",
    about_panel_text: "Créativité, technologie et solutions numériques au service des professionnels.",
    vision_label: "Ma vision",
    vision_title: "Rendre le numérique utile et accessible",
    vision_intro: "Accompagner les professionnels dans leur évolution grâce à des solutions adaptées à leurs réalités.",
    value_one_title: "Innovation",
    value_one_text: "Explorer les possibilités offertes par les technologies numériques pour répondre aux besoins concrets des activités.",
    value_two_title: "Adaptabilité",
    value_two_text: "Proposer des solutions cohérentes avec les objectifs, les moyens et les contraintes de chaque client.",
    value_three_title: "Qualité",
    value_three_text: "Accorder de l'importance à la présentation, au fonctionnement et à la fiabilité des solutions proposées.",
    about_method_title: "Chaque projet commence par une bonne compréhension du besoin",
    about_method_p1: "Avant de proposer une solution, je prends le temps de comprendre les objectifs du client, son activité et les difficultés qu'il souhaite résoudre.",
    about_method_p2: "Une proposition adaptée est ensuite définie. La réalisation se déroule avec des échanges réguliers et une validation des éléments importants avant la livraison.",
    about_cta_text: "Échangeons sur vos besoins et les solutions envisageables pour votre activité."
});

Object.assign(translations.en, {
    about_page_label: "About NG Digital Tech",
    about_page_intro: "Discover my business, my vision and my approach to digital transformation.",
    about_who_label: "Who am I?",
    about_who_title: "A business dedicated to digital solutions",
    about_who_p1: "NG Digital Tech is an independent business based in Pointe-Noire, Republic of the Congo, offering digital services to companies, shops, entrepreneurs and organizations.",
    about_who_p2: "My goal is to help professionals grow their online presence, improve their communication and use digital tools to organize their activities better.",
    about_who_p3: "Services are delivered remotely, with an approach adapted to the needs and goals of each project.",
    about_panel_text: "Creativity, technology and digital solutions serving professionals.",
    vision_label: "My vision",
    vision_title: "Making digital technology useful and accessible",
    vision_intro: "Supporting professionals as they grow with solutions that fit their reality.",
    value_one_title: "Innovation",
    value_one_text: "Exploring what digital technologies can offer to meet the real needs of each business.",
    value_two_title: "Adaptability",
    value_two_text: "Offering solutions that fit each client's goals, resources and constraints.",
    value_three_title: "Quality",
    value_three_text: "Caring about the presentation, operation and reliability of every solution delivered.",
    about_method_title: "Every project starts with a clear understanding of the need",
    about_method_p1: "Before proposing a solution, I take the time to understand the client's goals, their business and the problems they want to solve.",
    about_method_p2: "A tailored proposal is then defined. The work moves forward with regular exchanges and validation of key elements before delivery.",
    about_cta_text: "Let's talk about your needs and the possible solutions for your business."
});
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const burger = document.querySelector(".burger");
    if (!header || !burger) return;

    burger.addEventListener("click", () => {
        const open = header.classList.toggle("open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    header.querySelectorAll(".nav-menu a").forEach(link =>
        link.addEventListener("click", () => header.classList.remove("open"))
    );
});