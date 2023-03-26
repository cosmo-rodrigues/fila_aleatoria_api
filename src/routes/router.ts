import express from "express";

import { equipes } from "./equipes";

export const router = express.Router();

router.use("/equipes", equipes);