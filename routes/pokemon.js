import express from 'express';
import {
    addPokemon,
    replacePokemon,
    updatePokemon,
    deletePokemon
  } from '../controllers/pokemonController.js';

  const router = express.Router();

// Route handlers
router.post('/', addPokemon);
router.put('/:id', replacePokemon);
router.patch('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

export default router;