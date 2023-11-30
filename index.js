const tweets = [
    {
        id: 1,
        content: 'Lorem ipsum',
        author: 'Ada',
        likes: 10
    },
    {
        id: 2,
        content: 'Dolor sit amet',
        author: 'Steve',
        likes: 8
    },
    {
        id: 3,
        content: 'Consectetur adipiscing elit',
        author: 'Grace',
        likes: 12
    },
    {
        id: 4,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        author: 'Alan',
        likes: 2
    },
    {
        id: 5,
        content: 'Ut enim ad minim veniam',
        author: 'Ada',
        likes: 20
    }
]


// On récupère le premier tweet de la liste donnée
const firstTweet = tweets[0]

// On récupère la liste <ul> tweets-list
const tweetsList = document.getElementById('tweets-list')

// Définition d'une fonction pour créer des elements, leurs ajouter des classes et du contenu textuel rapidement
function createElement(tagName, classList = [], content = '') {
    // Création de l'élément HTML
    const element = document.createElement(tagName)

    // Ajout de toutes ces classes
    classList.forEach(className => {
        element.classList.add(className)
    })

    // Ajout de son contenu, uniquement si l'appel de la fonction le spécifie
    if (content) {
        element.textContent = content
    }

    return element
}

// Définition d'une fonction pour ajouter plusieurs élément HTML d'un seul coup à un autre élément du DOM
function addElementsInBatch(parentElement, ...childsElements) {
    childsElements.forEach(child => {
        parentElement.appendChild(child)
    })
}

tweets.forEach(tweet => {
    // On créer un tableau qui contient toutes les classes de la balise <li>
    const tweetClasses = ["tweet"]

    // On ajoute la classe favorite uniquement si le nombre de likes est supérieur a 10
    if (tweet.likes > 10) {
        tweetClasses.push('favorite')
    }

    // On créer l'élément li, ainsi que son contenu, nombre de likes et auteur
    const tweetWrapper = createElement('li', tweetClasses)
    const tweetContent = createElement('p', ['content'], tweet.content)
    const tweetLikes = createElement('p', ['likes'], tweet.likes)
    const tweetAuthor = createElement('p', ['author'], tweet.author)

    // On ajoute tous les éléments précedents à la balise <li>
    addElementsInBatch(tweetWrapper, tweetContent, tweetLikes, tweetAuthor)

    // On ajoute la balise <li> à la balise <ul>
    tweetsList.appendChild(tweetWrapper)

})
