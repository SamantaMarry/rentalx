import { Category } from "../../entities/Category";
import { CreateCategoryDTO } from "../ICategoriesRepository";



class CategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {

    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: CreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category []{
    return this.categories;
  }

  findByName(name: string): Category{
    return this.categories.find(category => category.name === name);
  }
}

export { CategoryRepository };
