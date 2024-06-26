import { validationResult } from "express-validator";
import { CustomError } from "../middleware/middleware.js";
import UserSchemaModal from "../model/ItemSchema.model.js";

export const getAllItems = async (req, res, next) => {
    try {
        const data = await UserSchemaModal.find({});
        res.json(data)
    } catch (error) {
        next(new CustomError(error, 500));
    }
}

export const getUser = async (req,res,next) => {
    const id = req.params.id;
    try {
        const data = await UserSchemaModal.findOne({ _id: id});
        res.json(data)
    } catch (error) {
        next(new CustomError(error, 500));
    }
}

export const addItems = async (req,res,next) => {
    const rawUser = req.body;
    if(rawUser.title===""){
        return next(new CustomError("This is my custom error", 200));
    }
    const validUser = new UserSchemaModal(rawUser);
    try {
        await validUser.save();
        res.status(201).json({message: 'Created successfully'});
    } catch (error) {
        next(new CustomError(error, 500));
    }
}

export const updateItem = async (req,res,next) => {
    
    const errRes = validationResult(req);
    if(errRes?.errors?.length>0){
        const errorMsg = errRes.errors[0].msg;
        return next(new CustomError(errorMsg, 400))
    }

    const id = req.params.id;
    const rawData = req.body;
    try {
        await UserSchemaModal.updateOne({ _id: id}, rawData);
        res.status(201).json({message: 'Updated successfully'});
    } catch (error) {
        next(new CustomError(error, 500));
    }
}

export const getItem = async (req,res,next) => {
    
    const errRes = validationResult(req);
    if(errRes?.errors?.length>0){
        const errorMsg = errRes.errors[0].msg;
        return next(new CustomError(errorMsg, 400))
    }

    const id = req.params.id;
    try {
        const data = await UserSchemaModal.findOne({ _id: id});
        res.status(201).json(data);
    } catch (error) {
        next(new CustomError(error, 500));
    }
}

export const deleteItem = async (req,res,next) => {

    const errRes = validationResult(req);
    if(errRes?.errors?.length>0){
        const errorMsg = errRes.errors[0].msg;
        return next(new CustomError(errorMsg, 400))
    }

    const id = req.params.id;
    try {
        await UserSchemaModal.deleteOne({ _id: id});
        res.status(201).json({message: 'Removed successfully'});
    } catch (error) {
        next(new CustomError(error, 500));
    }
}