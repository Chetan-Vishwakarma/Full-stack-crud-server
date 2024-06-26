import {body, param} from 'express-validator';

export const validId = [
    param("id").isMongoId().withMessage("Invalid Id"),
];

export const validParam = [
    body("title").isString().notEmpty().withMessage("Title is required")
];

export class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

export const errorHander = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        error: err.message,
    });
}

