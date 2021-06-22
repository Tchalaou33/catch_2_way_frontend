class Way {

    constructor(way, wayAttributes) {
        this.id = way.id
        this.color = wayAttributes.color
        this.description = wayAttributes.description
        this.destination =wayAttributes.destination
        Way.all.push(this)
        
    }

    renderWayCard() {
        return`
                <div data-id=${this.id}>
                  <h3>${this.color}</h3>
                  <p>${this.destination.name}</p>
                  <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;
      
    }
}

Way.all = [];