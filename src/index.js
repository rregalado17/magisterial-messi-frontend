const app = new App()
// const BASE_URL = 'http://www.localhost:3000';
// const TEAMS_URL = `${BASE_URL}/teams`
// const PLAYERS_URL = `${BASE_URL}/players`
 const body = document.querySelector("body")


// //document.addEventListener("DOMContentLoaded", () => loadTeams())

// // const loadTeams = () => {
// //   fetch(TEAMS_URL)
// //   .then(resp => resp.json())
// //   .then(json => {
// //     json.forEach(team => renderTeam(team))
// //   })
// // }

// // const renderTeam = (teamData) => {
// //   const div = document.createElement("div")
// //   const p = document.createElement("p")
// //   const button = document.createElement("button")
// //   const ul = document.createElement("ul")

// //   div.setAttribute("class", "card")
// //   div.setAttribute("data-id", teamData["id"])
// //   p.innerHTML = teamData.name

// //   button.setAttribute("data-team-id", teamData["id"])
// //   button.innerHTML = "Add A New Player"
// //   button.addEventListener("click", createPlayer)

// //   div.appendChild(p)
// //   div.appendChild(button)
// //   div.appendChild(ul)
// //   body.appendChild(div)

// //   teamData.players.forEach(player => renderPlayer(player))
// // }

// const renderPlayer = (player) => {
//   const ul = document.querySelector(`div[data-id="${player.team_id}"]`)
//   const li = document.createElement("li")
//   const button = document.createElement("button")
  
//   li.innerHTML = `${player.name}`
//   button.setAttribute("class", "sack")
//   button.setAttribute("data-player-id", player.id)
//   button.innerHTML = "Sack this player"
//   button.addEventListener("click", deletePlayer)

//   li.appendChild(button)
//   ul.appendChild(li)
// }

// const createPlayer = (e) => {
//   e.preventDefault()
//   const configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({team_id: e.target.dataset.teamId})
//   }

//   fetch(PLAYERS_URL, configObj)
//   .then(resp => resp.json())
//   .then(json => {
//     if (json.message){
//       alert(json.message)
//     } else {
//       renderPlayer(json)
//     }
//   })
// }

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