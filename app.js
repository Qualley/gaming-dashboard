import { data } from './modules/data.js';
import { renderCard, renderLikedCard } from './modules/renderCards.js';
import { slideUp } from './modules/animations.js';

data.map((post) => {
    return (post.liked ? renderLikedCard(post) : renderCard(post))
})

let cards = Array.from(document.querySelectorAll('.card')),
    title = document.querySelector('.wrapper h1')

slideUp(title, 0, 0)

cards.map((card, index) => {
    return (index === 0 ? slideUp(card, index, 1.15) : slideUp(card, index, .11))
})
