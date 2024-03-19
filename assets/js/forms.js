const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submit = document.getElementById('submit-btn')

// function to refrence the HTML elemtns 
function createAndRenderBlog(evt) {

    //preventing page from refreshing 
    evt.preventDefault()

    // creating an obj. to hold the blog post data 
    const blog = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        contentInput: contentInput.value.trim()
    };
    // parsing (converting) get item whick is an object into an array
    // retrieving existing blogs from local storage or creating an empty array 
    const blogs = JSON.parse(localStorage.getItem('blogs')) || []
    console.log(blogs);

    // adding the new blog post to the array 
    blogs.push(blog)

    // saving the updated arry back to local storage 
    localStorage.setItem('blogs',JSON.stringify(blogs))

    // redirects to blog.html 
    window.location.replace('blog.html')
}

// function to handle from submission 
function submitBlog (evt) {
    evt.preventDefault()

    //loging user input to console 
    console.log(usernameInput.value);
    console.log(titleInput.value);
    console.log(contentInput.value);
}
// function to check if the form is empty ; if is show alert 
function checkForm (evt) {
    console.log("check form function is called");
    evt.preventDefault();
    if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        alert("Please fill out form");
    } else {
        createAndRenderBlog(evt); 
    }
}

//event listener for the submit button 
submit.addEventListener('click', checkForm);