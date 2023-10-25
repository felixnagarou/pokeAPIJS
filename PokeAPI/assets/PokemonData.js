class PokemonData {
    constructor(id , name, height, weight, types, abilities, moves, stats, appearance ) {
        this.id = id
        this.name = name
        this.height = height
        this.weight = weight
        this.types = [...types]
        this.abilities = [...abilities]
        this.moves = [...moves]
        this.stats = [...stats]
        this.appearance = appearance
    }
}
export default PokemonData

