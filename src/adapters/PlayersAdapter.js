class PlayersAdapter {
    constructor() {
        this.baseUrl = 'http://www.localhost:3000/players'
    }

    getPlayers() {
        return fetch(this.baseUrl)
        .then(resp => resp.json())
    }

    createPlayer(value){
        const player = {
            name: value
        }
        return fetch(this.baseUrl, {            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({player}),
        }).then(res => res.json())
    }
}

