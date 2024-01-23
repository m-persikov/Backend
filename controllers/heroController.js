import heroModel from '../models/Hero.js';

export const addHero = async (req, res, next) => {
  // const { name, heroId, description, element } = req.body;
  // console.log(req.body);
  try {
    // await heroModel.create({ name, height }, {"$inc": "{heroID: + 1}"});
    await heroModel.create(req.body);
    res.status(201).json({ message: 'Hero created' });
  } catch (error) {
    res.status(500).json(next);
  };
};

export const getHeroById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const hero = await heroModel.findById(id);
    res.status(200).json(hero);
  } catch (error) {
    console.log(error);
    next(error);
  };
};

export const getAllHeroes = async (req, res, next) => {
  try {
    const heroes = await heroModel.find({});
    res.status(200).json(heroes);
  } catch (error) {
    console.log(error);
    next(error);
  };
};

export const deleteHero = async (req, res, next) => {
  const { name, height } = req.body;
  try {
    await heroModel.create({ name, height });
    res.status(201).json({ message: 'Hero deleted' });
  } catch (error) {
    res.status(500).json(next);
  };
};