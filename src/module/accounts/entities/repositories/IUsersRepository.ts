import { User } from "../User";
import { IUsersDTO } from '../../dtos/IUsersDTO';



interface IUsersRepository {

    create(data: IUsersDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;

}

export { IUsersRepository };