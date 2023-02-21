const wrapper = document.querySelector('.wrapper')
 
function renderCard(cardData) {

    let cardTemplate = `
    <div class="card">
        <img src=".${cardData.thumbnail}" class="thumbnail" alt="">
        <div class="time-stamp">7 min</div>
        <div class="content">
            <div class="info">
                <p class="card-title">
                    ${cardData.title}
                </p>
                <div class="stats">
                    <div class="stat">
                        <img src="./img/eye.svg" alt=""><span>${cardData.views}</span>views
                    </div>
                    <div class="stat">
                        <img src="./img/heart.svg" alt="">
                        <span>${cardData.likes}</span>likes
                    </div>
                </div>
            </div>
            <div class="user online">
                <img src="${cardData.author.photo}" class="user-photo" alt="">
                <div class="verified">
                    <img src="./img/check.svg" alt="">
                </div>
                <div class="user-info">
                    <p>${cardData.author.name}</p>
                    <p class="login">${cardData.created}</p>
                </div>
            </div>
        </div>
        <div class="like">
            <img src="./img/like.svg" alt="">
        </div>
    </div>
    `
    wrapper.insertAdjacentHTML("beforeend", cardTemplate)
}

function renderLikedCard(cardData) {

    let cardTemplate = `
    <div class="card liked">
        <img src=".${cardData.thumbnail}" class="thumbnail" alt="">
        <div class="time-stamp">7 min</div>
        <div class="content">
            <div class="info">
                <p class="card-title">
                    ${cardData.title}
                </p>
                <div class="stats">
                    <div class="stat">
                        <img src="./img/eye.svg" alt=""><span>${cardData.views}</span>views
                    </div>
                    <div class="stat">
                        <img src="./img/heart.svg" alt="">
                        <span>${cardData.likes}</span>likes
                    </div>
                </div>
            </div>
            <div class="user online">
                <img src="${cardData.author.photo}" class="user-photo" alt="">
                <div class="verified">
                    <img src="./img/check.svg" alt="">
                </div>
                <div class="user-info">
                    <p>${cardData.author.name}</p>
                    <p class="login">${cardData.created}</p>
                </div>
            </div>
        </div>
        <div class="like">
            <img src="./img/liked.svg" alt="">
        </div>
    </div>
    `
    wrapper.insertAdjacentHTML("beforeend", cardTemplate)
}

export { renderCard, renderLikedCard };