import { NextFunction, Request, Response } from 'express';
import { httpStatusCode } from '../constants/httpStatusCode';
import { gerarNumerosAleatorios, gerarTime } from '../database/models/equipes';

export const apagar = async () => {};
export const atualizar = async () => {};
export const criar = async () => {}
export const listarPeloId = async () => {};


export const listarTodos = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const equipes = gerarTime();
    response.status(httpStatusCode.OK).json({ equipes });
  } catch (error) {
    return next(error);
  }
};