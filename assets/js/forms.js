const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submit = document.getElementById('submit-btn')

function createAndRenderBlog(evt) {
    //preventing page from refreshing 
    evt.preventDefault()
    // creating an obj.
    const blog = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        contentInput: contentInput.value.trim()
    };
    // parsing (converting) get item whick is an object into an array
    // gets any previous blogs and adds them to the list, if there are no 
    // previous blogs we make a new list with our new blog and save.
    const blogs = JSON.parse(localStorage.getItem('blogs')) || []
    console.log(blogs);
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    // redirects to blog.html 
    window.location.replace('blog.html')
}

// function to store user input on the console. 
function submitBlog (evt) {
    evt.preventDefault()
    console.log(usernameInput.value);
    console.log(titleInput.value);
    console.log(contentInput.value);
}
// creates an alert if form is empty 
function alert () {
    if (usernameInput === null || titleInput === null || contentInput === null) {
        alert("Please fill out form")
    } else {
        createAndRenderBlog; 
    }
}

submit.addEventListener('click', createAndRenderBlog);