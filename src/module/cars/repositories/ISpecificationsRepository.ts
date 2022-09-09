import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({description, name}:ICreateSpecificationDTO): Promise<void>
    findbyName(name: string): Promise<Specification>;
}

export {ISpecificationsRepository, ICreateSpecificationDTO}