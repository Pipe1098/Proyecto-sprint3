export const printCardsPersonajes = (contenedor, arrayPersonajes, num) => {
    contenedor.innerHTML = "";
    if (num = 1) {
        arrayPersonajes.forEach(personaje => {
            const article = document.createElement("article");
            article.classList.add("main__card");
            article.innerHTML = `
        <figure class="card__image">
                    <img id=${personaje.id} src=${personaje.image} alt="${personaje.name}" class="card__img">
                </figure>
                <button class="card__delete" name='${personaje.id}'>❌</button>
                <button class="card__edit" name='${personaje.id}'>✏</button>
                <button class="card__favorite" name='${personaje.id}'>❤</button>
                <h4 class="card__name">${personaje.name}</h4>
                <h4 class="card__name">${personaje.height}</h4>
                <h4 class="card__name">${personaje.mass}</h4>
                <h4 class="card__name">${personaje.hairColor}</h4>
                <h4 class="card__name">${personaje.skinColor}</h4>
                <h4 class="card__name">${personaje.eyeColor}</h4>
                <h4 class="card__name">${personaje.birthYear}</h4>
                <h4 class="card__name">${personaje.gender}</h4>
                <h4 class="card__name">${personaje.mass}</h4>
                <h4 class="card__name">${personaje.specie}</h4>
        `;

            contenedor.appendChild(article);
        });
    }
    else {
        arrayPersonajes.forEach(personaje => {
            const article = document.createElement("article");
            article.classList.add("main__card");
            article.innerHTML = `
        <figure class="card__image">
                    <img id=${personaje.id} src=${personaje.image} alt="${personaje.name}" class="card__img">
                </figure>
                <button class="card__delete" name='${personaje.id}'>❌</button>
                <button class="card__edit" name='${personaje.id}'>✏</button>
                <button class="card__favorite" name='${personaje.id}'>❤</button>
                
        `;

            contenedor.appendChild(article);
        });
    }
};