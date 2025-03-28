import  jwt  from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Acceso denegado, token requerido' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Guardamos los datos del usuario en la petición
      next();
    } catch (error) {
      res.status(400).json({ message: 'Token inválido' });
    }
  };

export default authMiddleware;