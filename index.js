// if I want to reuse code for fetch
const endPoint = "http://localhost:3000/api/v1/ways"


document.addEventListener('DOMContentLoaded', () => {
    getWays()

    const createWayForm = document.querySelector("#create-way-form")

    createWayForm.addEventListener("submit", (e) => createFormHandler(e))
})

document.addEventListener("click", function(e) {
    const wayCard = document.getElementById(`${e.target.dataset.id}`)

    if(e.target.matches("#delete-btn")) {
      e.preventDefault()
      deleteWay(e.target.dataset.id)
      wayCard.remove(wayCard)
    }
})


function getWays() {
    fetch(endPoint)
    .then(response => response.json())
    .then(ways => {
        ways.data.forEach(way => {
        let newWay = new Way(way, way.attributes)

        document.querySelector('#way-container').innerHTML += newWay.renderWayCard()
        
        //  render(way)
      })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const colorInput = document.querySelector("#input-color").value
    const descriptionInput = document.querySelector("#input-description").value
    const destinationId = parseInt(document.querySelector("#destinations").value)
    postFetch(colorInput, descriptionInput, destinationId)
}

function postFetch(color, description, destination_id) {
    const bodyData = {color, description, destination_id}

    fetch(endPoint, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(way => {
        console.log(way);
        const wayData = way.data
        // render JSON response
        let newWay = new Way(wayData, wayData.attributes)
        document.querySelector('#way-container').innerHTML += newWay.renderWayCard()

        // render(wayData)
    })
}

function deleteWay(id) {

    fetch(`${endPoint}/${id}`,  {
      method: "DELETE"
    })
    .then(response => response.json())
  }