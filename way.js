class Way {

    constructor(way, wayAttributes) {
        this.id = way.id
        this.color = wayAttributes.color
        this.description = wayAttributes.description
        this.destination =wayAttributes.destination
        Way.all.push(this);
        debugger
    }
}

Way.all = [];