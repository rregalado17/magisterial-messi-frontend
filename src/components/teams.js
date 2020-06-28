class Teams {
    constructor(){
        this.teams = []
        this.adaptor = new TeamsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadTeams()
    }

    initBindingsAndEventListeners() {
        this.body = document.querySelector('body')
        this.teamForm = document.getElementById('new-team-form')
        this.newTeamId = document.getElementById('new-team-id')
        this.teamsContainer = document.getElementById('teams-container')
        //this.teamTitle = document.createElement('h1')
        this.teamEdit = document.getElementById('editId') 
        //this.teamName = document.querySelector('p')
        this.teamForm.addEventListener('submit', this.createTeam.bind(this))
        this.teamsContainer.addEventListener('dblclick', this.handleTeamClick.bind(this))
        this.body.addEventListener('blur', this.updateTeam.bind(this), true)
        //this.deleteButton = 
    }

    createTeam(e){
        e.preventDefault()
        const value = this.newTeamId.value
        this.adaptor.createTeam(value).then(team => {
            this.teams.push(new Team.create(team))
            this.newTeamId.value = ''
            this.renderTeam(team)
        })
    }

    handleTeamClick(e){
        const p = e.target
        p.contentEditable = true
        p.classList.add('editable')
    }

    updateTeam(e){
        const p = e.target
        p.contentEditable = false
        p.classList.remove('editable')
        const newValue = p.innerHTML
        const id = e.target.getAttribute('editid')
        this.adaptor.updateTeam(newValue, id)
    }

    deletePlayer(e){
        e.preventDefault()
        const ids = e.target.getAttribute('data-id')
        this.adaptor.deletePlayer(ids)
        e.target.parentElement.remove()
    }



    fetchAndLoadTeams() {
        this.adaptor.getTeams()
        .then(teams => {
            teams.sort((a, b) => a.id - b.id).forEach(team => this.renderTeam(team))
        })
    }
    
    renderTeam(team){
        const div = document.createElement('div')
        const p = document.createElement('p')
        const ul = document.createElement("ul")
        const button = document.createElement("button")

        div.setAttribute('class', 'card')
        div.setAttribute("data-id", team["id"])
        p.setAttribute('editId', team["id"])
        p.innerHTML = (`${team.name}`)
     
        button.setAttribute("data-team-id", team["id"])
        button.innerHTML = "Add New Player"
 
        div.appendChild(p)
        div.appendChild(button)
        div.appendChild(ul)
        this.teamsContainer.appendChild(div)
        team.players.forEach(player => this.renderPlayer(player))

    }

// const renderPlayer = (player) => {
//   const ul = document.querySelector(`div[data-id="${player.team_id}"]`)
//   const li = document.createElement("li")
//   const button = document.createElement("button")
  
//   li.innerHTML = `${player.first_name} ${player.last_name}`
//   button.setAttribute("class", "sack")
//   button.setAttribute("data-player-id", player.id)
//   button.innerHTML = "Sack this player"
//   button.addEventListener("click", deletePlayer)

//   li.appendChild(button)
//   ul.appendChild(li)
// }

    renderPlayer(player){
        const teamDiv = document.querySelector(`div[data-id="${player.team_id}`);  
        const li = document.createElement('li')
        const button = document.createElement('button')

        li.innerHTML = `${player.first_name}`
        button.setAttribute('class', 'sack')
        button.setAttribute('data-id', player.id)
        button.innerHTML = "Sack this player!"
            
        li.appendChild(button)
        teamDiv.appendChild(li)
        button.addEventListener('click', this.deletePlayer.bind(this))
    }
// const deletePlayer = (e) => {
//   e.preventDefault()

//   const configObj = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json", 
//       "Accept": "application/json"
//     }
//   }
//   fetch(`${PLAYERS_URL}/${e.target.dataset.playerId}`, configObj)
//   e.target.parentElement.remove()
// }

}



// class Teams {
//     constructor() {
//         this.teams = []
//         this.adapter = new TeamsAdapter()
//         this.initBindingsAndEventListeners() 
//         this.fetchAndLoadTeams()

//     }

//     initBindingsAndEventListeners(){
//         this.teamForm = document.getElementById('new-team-form')
//         this.newTeamId = document.getElementById('new-team-id')
//         this.teamContainer = document.getElementById('teams-container')
//         this.teamEditName = document.getElementById('p#name-id') 
//         this.teamForm.addEventListener('submit', this.createTeam.bind(this))
//         // window.addEventListener('load', (event) => {
//         //     this.teamEditName.addEventListener('dblclick', function(){
//         //     console.log('click')
//         //     });
//         // });
        
//     }


//     fetchAndLoadTeams() {
//         this.adapter
//         .getTeams()
//         .then(json => {
//             json.forEach(team => this.render(team))
//         })
//     }

//     render(teamData) {
//         const div = document.createElement("div")
//         const p = document.createElement("p")
//         const button = document.createElement("button")
//         const ul = document.createElement("ul")
            
//         div.setAttribute("class", "card")
//         div.setAttribute("data-id", teamData["id"])
//         p.innerHTML = teamData.name
                
//         button.setAttribute("data-team-id", teamData["id"]) 
//         button.innerHTML = "Add A New Player"

        
//         //button.addEventListener("click", createPlayer)
            
//         div.appendChild(p)
//         div.appendChild(button)
//         div.appendChild(ul)
//         body.appendChild(div)
//         //teamData.players.forEach(player => renderPlayer(player))
//     }
