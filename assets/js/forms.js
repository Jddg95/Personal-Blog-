const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

function createAndRenderBlog() {
    const blog = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        contentInput: contentInput.value.trim()
    };
    // parsing (converting) get item whick is an object into an array
    const blogs = JSON.parse(localStorage.getItem('blogs'))
    blogs.push(blog)
    localStorage.setItem(blog)
}