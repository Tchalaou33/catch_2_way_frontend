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
                <div id=${this.id}>
                  <h3>${this.color}</h3>
                  <p>${this.destination.name}</p>
                  <button data-id=${this.id} id="delete-btn" type="button" class="delete-btn">Delete Way</button>
                </div>
                <br><br>`;
      
    }
}

Way.all = [];