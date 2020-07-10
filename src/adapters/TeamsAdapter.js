class TeamsAdapter{
    constructor(){
        this.baseUrl = 'http://www.localhost:3000/teams'
        this.playerUrl = 'http://www.localhost:3000/players'
    }
    
    getTeams(){
        return fetch(this.baseUrl)
        .then(res => res.json())
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

    updateTeam(value, id){
        const team = {
            name: value,
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method:'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({team}),
        }).then(res => res.json())
    }
}


