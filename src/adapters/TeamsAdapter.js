class TeamsAdapter {
    constructor() {
        this.baseUrl = 'http://www.localhost:3000/teams'
    }

    getTeams() {
        return fetch(this.baseUrl)
        .then(resp => resp.json())
    }

    createTeam(value){
        const team = {
            name: value
        }
        return fetch(this.baseUrl, {            
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({team}),
        }).then(res => res.json())
    }
}