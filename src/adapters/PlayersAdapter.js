class PlayersAdapter {
    constructor() {
        this.baseUrl = 'http://www.localhost:3000/players'
    }

    getPlayers() {
        return fetch(this.baseUrl)
        .then(resp => resp.json())
    }
}