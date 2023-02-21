import { data } from './modules/data.js';
import { renderCard, renderLikedCard } from './modules/renderCards.js';
import { slideUp } from './modules/animations.js';

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
slideUp(title, 0, 0)

// map through the cards, animate them in
cards.map((card, index) => {
    // check index to delay animation
    if (index === 0) { slideUp(card, index, 1.15) }  
    else { slideUp(card, index, .11) }
})
