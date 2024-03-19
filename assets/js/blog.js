// retrieving blogs from local storage and parsing it into an array 
const blogs = JSON.parse(localStorage.getItem('blogs'))

// getting reference to the html element that will hold the blogs 
const blogHolder = document.getElementById('blogs')

// loop through all blogs 
blogs.forEach(element => {
    // created elements to display blog details 
    const title = document.createElement('h2') // heading for the blog title 
    const username = document.createElement('h4') // subheading for username 
    const content = document.createElement('p') // paragraph for blog content 

    // assigned text content  to elements based on blog property
    title.textContent = element.title // setting title text 
    username.textContent = element.username // setting username text 
    content.textContent = element.contentInput // setting content text 

    // created new div to hold individual blog elements 
    const blogContainer = document.createElement('div')

    // appending blog details to the blog container 
    blogContainer.appendChild(title) // adding title 
    blogContainer.appendChild(username) // adding username 
    blogContainer.appendChild(content) // adding content 

    // displays blogs container on the page 
    blogHolder.appendChild(blogContainer)

    // loging the currrent blog element to the console 
    console.log(element)
});