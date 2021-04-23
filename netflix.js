
const endpoint = "https://striveschool-api.herokuapp.com/api/movies/"


// Use ES6 to improve your previous Netflix project.

// FEATURES:
// / Create a backoffice page for inserting, editing and removing movies
// / Every movie will have a category
// / On the main page you should create, programmatically, a number of “lists” equal to the number of categories you have created

window.onload= () =>{
addCategories()
}



const movies ={
    categories:[ Adolescent={}, Anime={}, Action={} , Comedy={}, Documentary={}, Dramas={}, Horror={}, Kids={}, Romantic={}, Thriller={}]
}

async function addMovie(event){
    event.preventDefault()

    const movie = {
        "name": document.getElementById('movie-name').value,
        "description": document.getElementById('movie-description').value,
        "category": document.getElementById('movie-category').value,
        "imageUrl": "https://bit.ly/3cMc2IH",
    }
    console.log(movie)



    try{
        
        const response =  await fetch(endpoint,{
            method:"POST",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTU5MmIxZjBmYjAwMTVkOTE3NmYiLCJpYXQiOjE2MTkwMDY4NjgsImV4cCI6MTYyMDIxNjQ2OH0.sxwz9T__P0Zn6PRu1YL5eJZYMACmux3ELAOu1KOYvrI",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(movie)
        })
    }



// "name": "Strive School",
//     "description": "Horror movie about coding 10 hours per day",
//     "category": "horror",
//     "imageUrl": "https://bit.ly/3cMc2IH",