class PlayersAdapter{
    constructor() {
        this.baseUrl = 'http://www.localhost:3000/players'
    }
    
    getPlayers(){
        return fetch(this.baseUrl)
        .then(res  => res.json())
    }

    createPlayer(first_name, last_name, offense, defense, age, teamId){
        const player = {
            first_name: first_name,
            last_name: last_name,
            offense: offense,
            defense: defense,
            age: age,
            team_id: teamId
        }
        return fetch(this.baseUrl, {            
            method: 'POST',
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            },
            body: JSON.stringify({player}),
        }).then(res => res.json())
    }
}

