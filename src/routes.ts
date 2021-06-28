import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";


const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

export { router }
