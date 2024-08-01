import { Router } from "express";
import {
  deleteAllUser,
  deleteUserById,
  getAllUser,
  getUserById,
  newUser,
  updateUserDetails,
} from "../controler/user.controler.js";

const router = Router();

router.route("/").get(getAllUser).post(newUser).delete(deleteAllUser);
router
  .route("/:id")
  .patch(updateUserDetails)
  .get(getUserById)
  .delete(deleteUserById);

export default router;
