// if I want to reuse code for fetch
const endPoint = "http://localhost:3000/api/v1/ways"


document.addEventListener('DOMContentLoaded', () => {
    getWays()
})
function getWays() {
    fetch(endPoint)
    .then(response => response.json())
    .then(ways => {
        console.log(ways);
})
}