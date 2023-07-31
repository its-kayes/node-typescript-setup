/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

export const throwResponse = (
  res: Response,
  data: any,
  statusCode: number,
  message: string,
  success: boolean,
  meta?: {
    page: number;
    limit: number;
  },
) => {
  let objectWithMeta = {};
  if (meta) {
    objectWithMeta = {
      success,
      statusCode: statusCode,
      message,
      meta: {
        page: meta?.page,
        limit: meta?.limit,
      },
      data: data,
    };
  } else {
    objectWithMeta = {
      success,
      statusCode: statusCode,
      message,
      data: data,
    };
  }

  return res.status(statusCode).json(objectWithMeta);
};

// message:
//         message +
//         '. Missing language variant information may lead to specific result not found.',
