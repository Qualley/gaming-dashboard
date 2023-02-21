import { data } from './modules/data.js';
import { renderCard, renderLikedCard } from './modules/renderCards.js';

// map through the data objects, access to (element, index, array)
data.map((post) => {
    // if the post is liked, render the liked card
    if (post.liked === true) { renderLikedCard(post) }
    // render the card
    else { renderCard(post) }
})


let cards = Array.from(document.querySelectorAll('.card'))
let title = document.querySelector('.wrapper h1')

// animate the title in
title.style = `
    animation: fadeUp 2s cubic-bezier(0.42, 0, 0.08, 0.98);
    animation-delay: 0s;
    animation-direction: forwards;
    animation-fill-mode: forwards;
`

// map through the cards, animate them in
cards.map((card, index) => {

    // check index to delay animation
    if (index === 0) {
        card.style = `
            animation: fadeUp 2s cubic-bezier(0.42, 0, 0.08, 0.98);
            animation-delay: ${1.15 * index}s;
            animation-direction: forwards;
            animation-fill-mode: forwards;
        `
    }  
    else {
        card.style = `
            animation: fadeUp 2s cubic-bezier(0.42, 0, 0.08, 0.98);
            animation-delay: ${.15 * index}s;
            animation-direction: forwards;
            animation-fill-mode: forwards;
        `
    }
})

