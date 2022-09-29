import { User } from "../../User";
import { IUsersRepository } from "../IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { IUsersDTO } from "../../../dtos/IUsersDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: IUsersDTO): Promise<void> {
    const user = this.repository.create(data);

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}
export { UsersRepository };
