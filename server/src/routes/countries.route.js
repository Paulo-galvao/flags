import e from "express";
import countriesController from "../controllers/countries.controller.js";
import authVerification from "../middlewares/auth.middleware.js";

const { getAll, getOne, addNew, update ,deleteOne,
    getByName, getByContinent
} = countriesController;
const router = e.Router();

router.get("/search", getByName);
router.get("/", getAll);
router.get("/filter", getByContinent);

router.post("/add", authVerification, addNew);

router.get("/:id", getOne);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteOne);

export default router;