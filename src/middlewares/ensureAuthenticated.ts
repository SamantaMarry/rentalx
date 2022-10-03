import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../module/accounts/entities/repositories/implementation/UsersRepository";
import { AppError } from './../errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "a7e071b3de48cec1dd24de6cbe6c7bf1"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (err) {
    throw new AppError("Invalid token!", 401);
  }
}
