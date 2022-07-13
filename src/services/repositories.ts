import { Ingredient, IngredientType } from '../entities/index';
import { database } from '../data-source';

export const ingredientRepo = database.getRepository(Ingredient);
export const ingredientTypeRepo = database.getRepository(IngredientType);
