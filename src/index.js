const BASE_URL = 'http://www.localhost:3000';
const TEAMS_URL = `${BASE_URL}/teams`
const PLAYERS_URL = `${BASE_URL}/players`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => loadTeams())

const loadTeams = () => {
  fetch(TEAMS_URL)
  .then(resp => resp.json())
  .then(json => {
    json.forEach(team => renderTeam(team))
  })
}

const renderTeam = (teamData) => {
  const div = document.createElement("div")
  const p = document.createElement("p")
  const button = document.createElement("button")
  const ul = document.createElement("ul")

  div.setAttribute("class", "card")
  div.setAttribute("data-id", teamData["id"])
  p.innerHTML = teamData.name
  button.setAttribute("data-player-id", teamData["id"])
  button.innerHTML = "Add A New Player"
  button.addEventListener("click", createPlayer)

  div.appendChild(p)
  div.appendChild(button)
  div.appendChild(ul)

  main.appendChild(div)
  teamData.players.forEach(player => renderPlayer(player))
}

const renderPlayer = (player) => {
  const ul = document.querySelector(`div[data-id="${player.team_id}"]`)
  const li = document.createElement("li")
  const button = document.createElement("button")
  
  li.innerHTML = `${player.name}`
  button.setAttribute("class", "bench")
  button.setAttribute("data-player-id", player.id)
  button.innerHTML = "Sack this player"

  li.appendChild(button)
  ul.appendChild(li)
}

const createPlayer = () => {

}

const deletePlayer = () => {
  
}