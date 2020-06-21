class Teams {
    constructor() {
        this.teams = []
        this.adapter = new TeamsAdapter()
        //this.bindEventListeners() 
        this.fetchAndLoadTeams()
    }

    fetchAndLoadTeams() {
        this.adapter
        .getTeams().then(teams => {
            teams.forEach(team => this.teams.push(note))
        })

        .then(() => {
            this.render()
        })
    }
    render() {
        const teamsContainer = document.getElementById('teams-container')
        teamsContainer.innerHTML = 'Ready your team!'
    }
}