import e from "express";
import usersControllers from "../controllers/users.controller.js";

const { login, signIn } = usersControllers;

const router = e.Router();

router.post("/login", login);
router.post("/signin", signIn);

export default router;