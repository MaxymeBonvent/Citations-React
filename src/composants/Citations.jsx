import React, { useState } from 'react'

const Citations = () => {
    // --- VARIABLES --- //

    // Liste de citations
    const citations = 
    [
        "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", 
        "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.", 
        "On a deux vies. La deuxième commence quand on réalise qu'on n'en a qu'une.", 
        "Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire.", 
        "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie.", 
        "Rien dans la vie n'est à craindre, tout doit être compris. C'est maintenant le moment de comprendre davantage, afin de craindre moins.", 
        "La vie mettra des pierres sur ta route. À toi de décider d'en faire des murs ou des ponts.", 
        "La musique donne une âme à nos coeurs et des ailes à la pensée.", 
        "Quand un homme a faim, mieux vaut lui apprendre à pêcher que de lui donner un poisson.",
        "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre."
    ];

    // Numéro de la citation
    let num = 0;

    // Variable d'état du numéro de la citation
    const [num_citation, setNum_citation] = useState(num);

    // --- FONCTIONS --- //

    // Fonction pour afficher une autre citation
    const changementCitation = () => {
        // Choisir un entier entre 0 et le numéro de la dernière citation
        const nouveauNum = Math.floor(Math.random() * citations.length);
        console.log(`nouveauNum == ${nouveauNum}.`);

        // Remplacer l'état de num_citation par la valeur de nouveauNum
        setNum_citation(nouveauNum);
        console.log(`num_citation == ${num_citation}.`);

        // Message test
        console.log("changementCitation() appelée.");
    }

    // --- RENDU --- //
    return (
        <div id="div_citations">
            {/* Titre */}
            <h2>Générateur de citations</h2>

            {/* Citation */}
            <p id="citation">{citations[num_citation]}</p>

            {/* Bouton de changement de citation */}
            <button onClick={() => {changementCitation()}}>Autre citation</button>
        </div>
    )
}

export default Citations