// if I want to reuse code for fetch
const endPoint = "http://localhost:3000/api/v1/ways"


document.addEventListener('DOMContentLoaded', () => {
    getWays()

    const createWayForm = document.querySelector("#create-way-form")

    createWayForm.addEventListener("submit", (e) => createFormHandler(e))
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


function createFormHandler(e) {
    e.preventDefault()
    const colorInput = document.querySelector('#input-color').value
    const descriptionInput = document.querySelector('#input-description').value
    const destinationId = parseInt(document.querySelector('#destinations').value)
    postFetch(colorInput, descriptionInput, destinationId)
}

function postFetch(color, description, destination_id) {
    console.log(color, description, destination_id);
}