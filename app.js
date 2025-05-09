import express from 'express';
import pokemonRoutes from './routes/pokemon.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Mount routes
app.use('/pokemons', pokemonRoutes);

// Basic homepage route
app.get('/', (req, res) => res.send('Pokémon API running 🚀'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));