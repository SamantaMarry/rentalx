import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {

    constructor( private createCategoryUsecase: CreateCategoryUseCase ) {}
    
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    await this.createCategoryUsecase.execute({ name, description });

    return response.status(201).send();
  }
}
export { CreateCategoryController };
