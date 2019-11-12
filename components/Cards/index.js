// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'));


const addCard = (title, photo, writer) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const image = document.createElement('div');
    const imageSource = document.createElement('img');
    const author = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    image.classList.add('img-container');

    headline.textContent = title;
    imageSource.src = photo;
    author.textContent = writer;

    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(image);
    authorDiv.appendChild(author);
    image.appendChild(imageSource);

    return card;
}


const cardsContainer = document.querySelector('.cards-container');
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const languages = response.data.articles;
        // console.log(languages.javascript[0].headline);
        // console.log(languages.javascript[0].authorPhoto);
        // console.log(languages.javascript[0].authorName);
        // console.log(languages);
        // axios.get(languages.url)
        // .then(response => {
        for (const property in languages) {
            languages[property].forEach(article => {
                const newCard = addCard(article.headline, article.authorPhoto, article.authorName);
                cardsContainer.appendChild(newCard);
            })
            // console.log(`${property}: ${languages[property]}`);
        }

    })