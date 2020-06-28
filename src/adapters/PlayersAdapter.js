class PlayersAdapter{
    constructor() {
        this.baseURL = 'http://www.localhost:3000/players'
    }
    getPlayers(){
        return fetch(this.baseURL)
        .then(res  => res.json())
    }

    // deletePlayer(){
    //     const player = {
    //         id: id
    //     }
    //     return fetch(`${this.baseUrl}${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({player}),
    //     }).then(res => res.json())
    // }

    // createTeam(value){
    //     const team = {
    //         name: value
    //     }
    //     return fetch(this.baseUrl, {            
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({team}),
    //     }).then(res => res.json())
    // }

    // updateTeam(value, id){
    //     const team = {
    //         name: value,
    //     }
    //     return fetch(`${this.baseUrl}/${id}`, {
    //         method:'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({team}),
    //     }).then(res => res.json())
    // }
}


// class PlayersAdapter {
//     constructor() {
//         this.baseUrl = 'http://www.localhost:3000/players'
//     }

//     getPlayers() {
//         return fetch(this.baseUrl)
//         .then(resp => resp.json())
//     }

//     createPlayer(value){
//         const player = {
//             name: value
//         }
//         return fetch(this.baseUrl, {            
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({player}),
//         }).then(res => res.json())
//     }
// }

