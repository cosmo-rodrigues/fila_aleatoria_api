import express from 'express';
import * as controller from '../controllers/equipes';

export const equipes = express.Router();

equipes.get('/', controller.listarTodos);
equipes.get('/:id', () => {});
equipes.post('/', () => {});
equipes.put('/:id', () => {});
equipes.delete('/', () => {});
equipes.delete('/:id', () => {});
