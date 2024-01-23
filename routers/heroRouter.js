import { Router } from 'express';
const route = Router();

import { getAllHeroes, getHeroById, addHero } from '../controllers/heroController.js';

// DATABASE
route.get('/heroes', (req, res, next) => {
  getAllHeroes(req, res, next);
});

route.get('/hero/:id', (req, res, next) => {
  getHeroById(req, res, next);
});

route.post('/hero/new', (req, res, next) => {
  addHero(req, res, next);
});

export default route;