import { Router } from "express";
import { AuthenticateUserController } from "../module/accounts/useCases/authenticateUser/authenticateUserController";


const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };


