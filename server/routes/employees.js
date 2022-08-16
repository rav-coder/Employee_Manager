import express from 'express';

import { getEmployees, createEmployee, getEmployeesBySearch } from '../controllers/employees.js';

const router = express.Router();

router.get ('/', getEmployees)
router.get('/search', getEmployeesBySearch)
router.post('/', createEmployee)

export default router