class Player {
    constructor(playerJSON){
        this.id = playerJSON.id 
        this.first_name = playerJSON.first_name
        this.last_name = playerJSON.last_name
        this.offense = playerJSON.offense
        this.defense = playerJSON.defense 
        this.age = playerJSON.age
    }
}