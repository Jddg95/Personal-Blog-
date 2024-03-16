const blogs = JSON.parse(localStorage.getItem('blogs'))
const blogHolder = document.getElementById('blogs')
// loop through all blogs 
blogs.forEach(element => {
    // created elements 
    const title = document.createElement('h2')
    const username = document.createElement('h4')
    const content = document.createElement('p')
    // assigned text to elements based on blog property
    title.textContent = element.title
    username.textContent = element.username
    content.textContent = element.contentInput
    // created new div to hold blogs
    const blogContainer = document.createElement('div')
    blogContainer.appendChild(title)
    blogContainer.appendChild(username)
    blogContainer.appendChild(content)
    // displays blogs on page 
    blogHolder.appendChild(blogContainer)
    console.log(element)
});