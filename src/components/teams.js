class Teams {
    constructor(){
        this.teams = []
        this.adapter = new TeamsAdapter()
        this.initBindingsAndEventListeners()
        this.renderTeamList()
        this.sortButton()
        this.players = new Players()
        this.fetchAndLoadTeams()
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

    // removeTeamsContainer(){
    //     const removeTeamsContainer = document.getElementById('teams-container').remove()
    // }

    createTeam(e){
        e.preventDefault()
        const value = this.newTeamId.value
        this.adapter.createTeam(value).then(team => {
            this.teams.push(new Team(team))
            this.newTeamId.value = ''
            this.renderTeam(team)
            this.renderTeamList(team)
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
        this.adapter.updateTeam(newValue, id)
    }

    fetchAndLoadTeams() {
        this.adapter.getTeams()
        .then(teams => {
            teams.sort((a, b) => a.id - b.id).forEach(team => this.renderTeam(team))
        })
    }

    renderTeamList(){
        this.adapter.getTeams()
        .then(teams => {
            teams.forEach(function(team){
            const option = document.createElement('option');
            option.value = team.id
            option.innerHTML = team.name;
            selector.appendChild(option)
            })
        })
        
    }
    sortButton(){
        const button = document.createElement('button')
        button.setAttribute('class', 'sort')
        button.innerHTML = 'Sort Teams Alphabetically'
        this.body.appendChild(button)
        button.addEventListener('click', this.sortTeam.bind(this))    
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
        team.players.forEach(player => this.players.renderPlayer(player))
    }

    sortTeam(e){
        e.preventDefault()
        let list, i, switching, b, shouldSwitch;
        list = document.getElementById('teams-container');
        switching = true;
        while (switching) {
            switching = false;
            b = list.getElementsByClassName('card');
            for (i = 0; i < (b.length - 1); i++) {

            shouldSwitch = false;

            if (b[i].innerText.toLowerCase() > b[i + 1].innerText.toLowerCase()) {
                shouldSwitch = true;
                break;
                }
            }
            
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
    }
}

