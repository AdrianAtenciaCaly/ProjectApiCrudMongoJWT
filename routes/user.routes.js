import express from	'express';
import User from '../models/user.model.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();


// Obtener todos los usuarios (PROTEGIDO)
router.get('/', authMiddleware, async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
  });
  
  // Obtener un usuario por ID (PROTEGIDO)
  router.get('/:id', authMiddleware, async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  });
  
  export default router;
