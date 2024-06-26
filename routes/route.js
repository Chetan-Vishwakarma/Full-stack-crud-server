import express from "express";
import { addItems, getAllItems, updateItem, deleteItem, getItem} from "../controller/item-controller.js";
import { validId } from "../middleware/middleware.js";

const router = express.Router();

router.get('/items', getAllItems);
router.post('/items', addItems);
router.get('/items/:id', validId, getItem);
router.put('/items/:id', validId, updateItem);
router.delete('/items/:id', validId, deleteItem);


export default router