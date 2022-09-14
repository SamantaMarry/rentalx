import { inject, injectable } from "tsyringe";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { IUsersRepository } from "../../entities/repositories/IUsersRepository";




@injectable()
class CreateUserUseCase {

    constructor(  
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute(data: IUsersDTO): Promise<void>{
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists){
            throw new Error (" User already exists")
        }

        this.usersRepository.create(data)

    }

}

export { CreateUserUseCase }