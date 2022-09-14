import { container } from "tsyringe";
import { UsersRepository } from "../../module/accounts/entities/repositories/implementation/UsersRepository";
import { IUsersRepository } from "../../module/accounts/entities/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../module/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../module/cars/repositories/implemententions/CategoriesRepository";
import { SpecificationsRepository } from "../../module/cars/repositories/implemententions/SpecificationsRepository";
import { ISpecificationsRepository } from "../../module/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository", UsersRepository
)