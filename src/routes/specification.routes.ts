import {Router} from "express";
import { createSpecificationController } from "../module/cars/useCases/createSpecification";

const specificationsRoutes = Router(); 


specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
  
}); 

export {specificationsRoutes};