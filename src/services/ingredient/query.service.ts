import { ingredientRepo } from '../repositories';

export const getAll = () => ingredientRepo.find({ relations: ['type'] });
