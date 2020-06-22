class Teams {
    constructor() {
        this.teams = []
        this.adapter = new TeamsAdapter()
        this.initBindingsAndEventListeners() 
        this.fetchAndLoadTeams()
    }

    initBindingsAndEventListeners(){
        this.teamForm = document.getElementById('new-team-form')
        this.newTeamId = document.getElementById('new-team-id')
        this.teamForm.addEventListener('submit', this.createTeam.bind(this))
    }

    createTeam(e){
        e.preventDefault()
        const newTeam = document.querySelector(`div[data-id]`)
        const value = this.newTeamId.value 
        this.adapter.createTeam(value).then(team => {
            this.teams.push(new Team(team))
            this.render(team)
        })
    }

    fetchAndLoadTeams() {
        this.adapter
        .getTeams()
        .then(json => {
            json.forEach(team => this.render(team))
        })
    }

    render(teamData) {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const button = document.createElement("button")
        const ul = document.createElement("ul")
            
        div.setAttribute("class", "card")
        div.setAttribute("data-id", teamData["id"])
        p.innerHTML = teamData.name
                
        button.setAttribute("data-team-id", teamData["id"]) 
        button.innerHTML = "Add A New Player"

        
        //button.addEventListener("click", createPlayer)
            
        div.appendChild(p)
        div.appendChild(button)
        div.appendChild(ul)
        body.appendChild(div)
            
        //teamData.players.forEach(player => renderPlayer(player))
    }

      

}