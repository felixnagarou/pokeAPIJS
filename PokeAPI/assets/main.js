import PokemonData from "./PokemonData.js";

const  url = "https://pokeapi.co/api/v2/pokemon/"


let response
let data
let searchInput

const dataList = document.querySelector("#dataHolder")

//let test = await (await fetch(url + "ditto")).json()
//console.log(test.abilities[0])

//const dittoData = JSON.stringify(test)

let searchBtn = document.querySelector("button")
let searchForm = document.querySelector("#searchBar")

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    for (const child of document.querySelector('#dataHolder').children) {
        child.textContent = ""
    }

    let  incomingData;
    try {
        let pokemonAPIResponse = await fetch(url + document.querySelector("input#search").value);
        incomingData = await pokemonAPIResponse.json()
        //console.log(incomingData.types[0].type.name)
    }catch (error){
        console.error(error)
    }
    const divElement = document.createElement('div')


  //let pokemon = new PokemonData(
  //    incomingData.id,
  //    incomingData.name,
  //    incomingData.height,
  //    incomingData.types,
  //    incomingData.abilities.iterateNext(),
  //    incomingData.moves.forEach(),
  //    incomingData.stats.forEach(),
  //    incomingData.forms.parse()
  //)

    let pokemon = [incomingData.id, incomingData.name, incomingData.height, incomingData.abilities.forEach(e => )]



    for(let i = 0; i <= pokemon.length; i++){
        let spanElement = document.createElement('tr')
        spanElement.textContent = pokemon[i]
        document.querySelector("#dataHolder").appendChild(spanElement)
    }

})


