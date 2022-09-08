import { container } from "tsyringe";
import { ICategoriesRepository } from "../../module/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../module/cars/repositories/implemententions/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoriesRepository
)