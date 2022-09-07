import { Category } from "../entities/Category";


interface CreateCategoryDTO {
    name: string;
    description: string;
  }

interface ICategoriesRepository{
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: CreateCategoryDTO): void;

}

export { ICategoriesRepository, CreateCategoryDTO };