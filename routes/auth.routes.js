import	 express	 from	'express';
import jwt	 from	'jsonwebtoken';
import User from '../models/user.model.js';

const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (await User.findOne({ email })) 
        return res.status(400).json({ message: 'El email ya está registrado' });
  
      const user = new User({ name, email, password });
      await user.save();
  
      res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Inicio de sesión
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });
  
      if (!await user.comparePassword(password))
        return res.status(400).json({ message: 'Contraseña incorrecta' });
  
      // Generar token
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  export default router;