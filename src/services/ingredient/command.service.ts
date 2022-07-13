import { Ingredient } from '../../entities';
import { ingredientRepo } from '../repositories';

export const create = (ingredient: Ingredient) => ingredientRepo.save(ingredient);
