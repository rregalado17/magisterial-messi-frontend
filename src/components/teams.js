class Teams {
    constructor(){
        this.teams = []
        this.adaptor = new TeamsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadTeams()
        this.renderTeamList()
    }

    initBindingsAndEventListeners() {
        this.body = document.querySelector('body')
        this.teamForm = document.getElementById('new-team-form')
        this.newTeamId = document.getElementById('new-team-id')
        this.teamsContainer = document.getElementById('teams-container')
        this.teamEdit = document.getElementById('editId') 
        this.teamForm.addEventListener('submit', this.createTeam.bind(this))
        this.teamsContainer.addEventListener('dblclick', this.handleTeamClick.bind(this))
        this.body.addEventListener('blur', this.updateTeam.bind(this), true)

    }

    createTeam(e){
        e.preventDefault()
        const value = this.newTeamId.value
        this.adaptor.createTeam(value).then(team => {
            this.teams.push(new Team(team))
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

    renderTeamList(){
        this.adaptor.getTeams()
        .then(teams => {
            teams.forEach(function(team){
            const option = document.createElement('option');
            option.value = team.id
            option.innerHTML = team.name;
            selector.appendChild(option)
            })
        })
        
    }
    
    renderTeam(team){
        const div = document.createElement('div')
        const p = document.createElement('p')
        const ul = document.createElement('ul')
 
        div.setAttribute('class', 'card')
        div.setAttribute("data-id", team["id"])
        p.setAttribute('editId', team["id"])
        p.innerHTML = (`${team.name}`)

        div.appendChild(p)
  
        div.appendChild(ul)
        this.teamsContainer.appendChild(div)
        team.players.forEach(player => this.renderPlayer(player))
    }

    renderPlayer(player){
        const teamDiv = document.querySelector(`div[data-id="${player.team_id}`);  
        const li = document.createElement('li')
        const button = document.createElement('button')

        li.innerHTML = `${player.last_name}, ${player.first_name} 
        <br>Offense: ${player.offense}
        <br>Defense: ${player.defense}
        <br>Age: ${player.age}<br>`
        button.setAttribute('class', 'sack')
        button.setAttribute('data-id', player.id)
        button.innerHTML = "Sack this player!"
            
        li.appendChild(button)
        teamDiv.appendChild(li)
        button.addEventListener('click', this.deletePlayer.bind(this))

    }
}

