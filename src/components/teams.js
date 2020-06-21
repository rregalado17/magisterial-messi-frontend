class Teams {
    constructor() {
        this.teams = []
        this.adapter = new TeamsAdapter()
        //this.initBindingsAndEventListeners() 
        this.fetchAndLoadTeams()
    }

    initBindingsAndEventListeners(){
        
    }

    fetchAndLoadTeams() {
        this.adapter
        .getTeams().then(json => {
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

    // const loadTeams = () => {
//   fetch(TEAMS_URL)
//   .then(resp => resp.json())
//   .then(json => {
//     json.forEach(team => renderTeam(team))
//   })
// }

    // render = (teamData) => {
    //     const div = document.createElement("div")
    //     const p = document.createElement("p")
    //     const button = document.createElement("button")
    //     const ul = document.createElement("ul")
            
    //     div.setAttribute("class", "card")
    //     div.setAttribute("data-id", teamData["id"])
    //     p.innerHTML = teamData.name
                
    //     button.setAttribute("data-team-id", teamData["id"])
    //     button.innerHTML = "Add A New Player"
    //     //button.addEventListener("click", createPlayer)
            
    //     div.appendChild(p)
    //     div.appendChild(button)
    //     div.appendChild(ul)
    //     body.appendChild(div)
            
    //     teamData.players.forEach(player => renderPlayer(player))
    // }
      

}