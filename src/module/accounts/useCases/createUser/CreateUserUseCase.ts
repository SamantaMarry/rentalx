import { hash } from "bcryptjs";
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

        const passwordHash = await hash(data.password, 8)

        this.usersRepository.create({...data, password: passwordHash})

    }

}

export { CreateUserUseCase }