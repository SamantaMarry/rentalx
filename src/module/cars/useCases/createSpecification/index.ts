import { SpecificationsRepository } from "../../repositories/implemententions/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



const specificationRepository = new SpecificationsRepository();
const createSpecificationUsecase = new CreateSpecificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUsecase);

export { createSpecificationController };