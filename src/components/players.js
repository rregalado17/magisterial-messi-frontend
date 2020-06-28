 class Players{
    constructor(){
        this.Players = []
        this.adaptor = new PlayersAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadPlayers
    }

    // fetchAndLoadPlayers() {
    //     this.adaptor.getPlayers()
    //     .then(players => {
    //         console.log(players)
    //     })
    // }

    fetchAndLoadPlayers() {
        this.adaptor.getPlayers()
        .then(players => {
            
            players.forEach(player => this.render(player))
        })
    }

//     renderPlayer(player){
//         return console.log(player)
//         // const teamsContainer = document.getElementById('teams-container')
//         // teamsContainer.innerHTML = `${this.teams.map(team =>)}`
//         // console.log('my teams are', this.teams)

//         // //     render(players){
//             const ul = document.querySelector(`div[data-id="${players.team_id}"]`)
//             const li = document.createElement("li")
//             const button = document.createElement("button")
                
//             li.innerHTML = `${player.name}`
//             button.setAttribute("class", "sack")
//             button.setAttribute("data-player-id", player.id)
//             button.innerHTML = "Sack this player"
//             //button.addEventListener("click", deletePlayer)
            
//             li.appendChild(button)
//             ul.appendChild(li)
        
//     }
}



// // class Players { 
// //     constructor() {
// //         this.players = []
// //         this.adapter = new PlayersAdapter()
// //         this.initiateBindingsAndEventListeners() 
// //         this.fetchAndLoadPlayers()
// //     }

// //     initiateBindingsAndEventListeners(){
// //         // this.playerInit = document.getElementById('data-team-id')
// //         // this.newPlayerId = document.getElementById('data-player-id')
// //         // this.playerInit.addEventListener('click', this.createPlayer.bind(this))
// //     }

// //     createPlayer(e){
// //         e.preventDefault()
// //         const ul = document.querySelector(`div[data-id="${players.team_id}"]`)
// //         const div = document.createElement("div")
// //         const button = document.createElement("button")

// //         button.setAttribute("data-team-id", teamData["id"]) 
// //         button.innerHTML = "Add A Player"

// //         div.appendChild(button)
// //     }

// //     // const renderPlayer = (player) => {
// // //   const ul = document.querySelector(`div[data-id="${player.team_id}"]`)
// // //   const li = document.createElement("li")
// // //   const button = document.createElement("button")
  
// // //   li.innerHTML = `${player.first_name} ${player.last_name}`
// // //   button.setAttribute("class", "sack")
// // //   button.setAttribute("data-player-id", player.id)
// // //   button.innerHTML = "Sack this player"
// // //   button.addEventListener("click", deletePlayer)

// // //   li.appendChild(button)
// // //   ul.appendChild(li)
// // // }

// //     fetchAndLoadPlayers(){
// //         this.adapter
// //         .getPlayers()
// //         .then(json => {
// //             json.forEach(player => this.render(player))
// //         })
// //     }
    
// //     render(players){
// //             const ul = document.querySelector(`div[data-id="${players.team_id}"]`)
// //             const li = document.createElement("li")
// //             const button = document.createElement("button")
                
// //             li.innerHTML = `${players.name}`
// //             button.setAttribute("class", "sack")
// //             button.setAttribute("data-player-id", players.id)
// //             button.innerHTML = "Sack this player"
// //             //button.addEventListener("click", deletePlayer)
            
// //             li.appendChild(button)
// //             ul.appendChild(li)
// //         }
// //     }


// //     // // const deletePlayer = (e) => {
// //     // // e.preventDefault()

// //     // // const configObj = {
// //     // //     method: "DELETE",
// //     // //     headers: {
// //     // //     "Content-Type": "application/json", 
// //     // //     "Accept": "application/json"
// //     // //     }
// //     // // }
// //     // // fetch(`${PLAYERS_URL}/${e.target.dataset.playerId}`, configObj)
// //     // // e.target.parentElement.remove()
// //     // // } 
