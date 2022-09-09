import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import {Request, Response} from "express";
import { container } from 'tsyringe';

class CreateSpecificationController{

    
  async handle(request: Request, response: Response): Promise <Response> {
    const { name, description } = request.body;

    const createSpecificationUsecase = container.resolve(CreateSpecificationUseCase);
    
    await createSpecificationUsecase.execute({ name, description });

    return response.status(201).send();
  }

}
export { CreateSpecificationController };