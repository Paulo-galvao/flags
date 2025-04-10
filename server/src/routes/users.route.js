import e from "express";
import usersControllers from "../controllers/users.controller.js";

const { login, signup } = usersControllers;

const router = e.Router();

router.post("/login", login);
router.post("/signup", signup);

export default router;