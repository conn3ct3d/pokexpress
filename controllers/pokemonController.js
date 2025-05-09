import { pokemons  } from "../data/pokemonData.js";
let nextId = pokemons.length+1;

// Add new pokemon (post/pokemons)
export const addPokemon = (req,res) =>{
    const {name, type} = req.body;
    if (!name || !type ) return res.status(400).json({error:'Name and type are required'});

    const newPokemon = {id:nextId++, name, type};
    pokemons.push(newPokemon);
    res.status(201).json(newPokemon);
};

// replace pokemon (put /pokemons/:id)
export const replacePokemon = (req,res) =>{
    const {id} = req.params;
    const index = pokemons.findIndex(p => p.id === parseInt(id));
    if (index === -1) return res.status(404).json({error:"Pokemon not found"});

    const {name,type} = req.body;
    if (!name||!type) return res.status(400).json({error: "Name and type are required"});

    pokemon[index] = {id: parseInt(id), name, type};
    res.json(pokemons[index]);
};

// Update part of a pokemon (patch /pokemons/:id)
export const updatePokemon = (req,res) => {
    const {id} = req.params;
    const pokemon = pokemons.find(p=>id === parseInt(id));
    if (!pokemon) return res.status(404).json({error:"Pokemon not found"});

    const {name, type} = req.body;
    if (name) pokemon.name = name;
    if (type) pokemon.type = type;

    res.json(pokemon);
};

// delete a pokemon (delete /pokemons/id)
export const deletePokemon = (req,res) => {
    const {id} = req.params;
    const index = pokemons.findIndex(p => p.id === parseInt(id));
    if (index === -1) return res.status(404).json({error:"Pokemon not found"});

    const deleted = pokemons.splice(index, 1);
    res.json({message:'Deleted', pokemon:delete[0]});
}



