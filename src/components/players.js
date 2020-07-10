 class Players{
    constructor(){
        this.players = []
        this.adapter = new PlayersAdapter()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.body = document.querySelector('body')
        this.playerForm = document.getElementById('create-new-player-form')
        this.newFirstId = document.getElementById('new-first-id')
        this.newLastId =  document.getElementById('new-last-id')
        this.newOffenseId = document.getElementById('new-offense-id')
        this.newDefenseId = document.getElementById('new-defense-id')
        this.newAgeId = document.getElementById('new-age-id')
        this.teamId = document.getElementById('selector')
        this.playerForm.addEventListener('submit', this.createPlayer.bind(this))

    }

    createPlayer(e){
        e.preventDefault()
        this.teamId = document.getElementById('selector')
        const first_name = this.newFirstId.value
        const last_name = this.newLastId.value
        const offense = this.newOffenseId.value
        const defense = this.newDefenseId.value
        const age = this.newAgeId.value
        const teamId = this.teamId.value
        this.adapter.createPlayer(first_name, last_name, offense, defense, age, teamId).then(player => {
            if (player.message){
                alert(player.message)
            } else {
        }
            this.newFirstId.value = ''
            this.newLastId.value = ''
            this.newOffenseId.value = ''
            this.newDefenseId.value = ''
            this.newAgeId.value = ''
            this.teamId.value = ''
            this.teams = new Teams()
            this.teams.renderPlayer(player)
        })
    }

}
