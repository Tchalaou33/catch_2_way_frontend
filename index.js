// if I want to reuse code for fetch
const endPoint = "http://localhost:3000/api/v1/ways"


document.addEventListener('DOMContentLoaded', () => {
    getWays()
})
function getWays() {
    fetch(endPoint)
    .then(response => response.json())
    .then(ways => {
        ways.data.forEach(way => {
            const wayMarkup = `
          <div data-id=${way.id}>
            <h3>${way.attributes.color}</h3>
            <p>${way.attributes.destination.name}</p>
            <button data-id=${way.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#way-container').innerHTML += wayMarkup
      })

    })
}