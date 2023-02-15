const section = document.querySelector(".filmes");

const movies = [
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Batman',
        rating: 9.2,
        year: 2022,
        description: "On Halloween, Gotham City mayor Don Mitchell Jr. is murdered by a serial killer calling himself the Riddler. Billionaire Bruce Wayne, who has operated for two years as the vigilante Batman, investigates alongside the Gotham City Police Department (GCPD).",
        isFavorited: true,
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        title: 'Avengers',
        rating: 9.2,
        year: 2019,
        description: "On Halloween, Gotham City mayor Don Mitchell Jr. is murdered by a serial killer calling himself the Riddler. Billionaire Bruce Wayne, who has operated for two years as the vigilante Batman, investigates alongside the Gotham City Police Department (GCPD).",
        isFavorited: false
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
        title: 'Doctor Strange',
        rating: 9.2,
        year: 2022,
        description: "On Halloween, Gotham City mayor Don Mitchell Jr. is murdered by a serial killer calling himself the Riddler. Billionaire Bruce Wayne, who has operated for two years as the vigilante Batman, investigates alongside the Gotham City Police Department (GCPD).",
        isFavorited: false
    },
]

movies.forEach(movie => renderMovie(movie));

function renderMovie(movie) {
    section.innerHTML += `
    <div class="filmes__filme">
                <img src="${movie.image}" alt="${movie.title}" class="filmes__filme-imagem">
                <div class="filmes__filme-detalhes">
                    <h2 class="filmes__filme-titulo">${movie.title} (${movie.year})</h2>
                    <div class="filmes__filme-icone">
                        <div class="filmes__filme-svg">
                            <p><img src="/Vector.svg" alt="Ícone de estrela">${movie.rating}</p>
                            <input type="checkbox" id="coracao">
                            <label for="coracao" class="filmes__filme-coracao"><svg width="23" height="21"
                                    viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
                                        stroke="#BA0707" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg> Favoritar</label>
                        </div>
                    </div>
                </div>
                <p class="filmes__filme-descricao">${movie.description}</p>
            </div>
    `
}
