class TeamsAdapter {
    constructor() {
        this.baseUrl = 'http://www.localhost:3000/teams'
    }

    getTeams() {
        return fetch(this.baseUrl)
        .then(resp => resp.json())
    }
}