const sidebar = document.getElementById('sidebar')
const button = document.getElementById('toggle-button')

button.addEventListener('click', () => {
    sidebar.classList.toggle('show')
})

