import express from"express";

import { createEmail, deleteEmail, getAllEmailById } from "../controller/emailcontroller.js";
import isAuthenticated from "../middleware/isAuthenticcated.js";

const router=express.Router();

router.route("/create").post(isAuthenticated, createEmail);
router.route("/:id").delete(isAuthenticated, deleteEmail);
router.route("/getallemails").get(isAuthenticated, getAllEmailById);

export default router;