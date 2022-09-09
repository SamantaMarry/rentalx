import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";
import { Repository } from 'typeorm';
import { getRepository } from 'typeorm';


class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>

    constructor() {
        this.repository = getRepository(Specification);
    }
    
    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        });


        await this.repository.save(specification);
    }

    async findbyName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });

        return specification;

    }

    

}

export { SpecificationsRepository };