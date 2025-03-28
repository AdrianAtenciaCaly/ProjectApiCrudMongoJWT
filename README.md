# 🚀 ProjectApiCrudMongoJWT

Este proyecto es una API REST con autenticación mediante **JSON Web Token (JWT)**, protección de rutas y gestión de usuarios utilizando **MongoDB**.

## 📌 Características
- 🔐 **Autenticación con JWT** (Inicio de sesión y generación de token).
- 🛡️ **Protección de rutas** con middleware de validación de token.
- 📦 **CRUD de usuarios** en MongoDB.
- ⚡ **Node.js + Express** para el backend.

## 🚀 Instalación y ejecución
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/AdrianAtenciaCaly/ProjectApiCrudMongoJWT.git
cd ProjectApiCrudMongoJWT
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y agrega:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/tu-base-de-datos
JWT_SECRET=tu_secreto_super_seguro
```

### 4️⃣ Ejecutar el servidor
```bash
npm start
```
El servidor se ejecutará en `http://localhost:3000`.

## 🔑 Autenticación con JWT
### 📌 Generar token (Login)
**Endpoint:** `POST /login`
```json
{
  "email": "usuario@example.com",
  "password": "123456"
}
```
📌 **Respuesta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 📌 Acceder a rutas protegidas
Para acceder a rutas protegidas, incluye el token en el header `Authorization` con formato `Bearer Token`.

Ejemplo en **Postman:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

## 📌 Endpoints disponibles
| Método  | Ruta        | Descripción                      | Autenticación |
|---------|------------|----------------------------------|--------------|
| POST    | `/register` | Registro de usuario             | ❌ No        |
| POST    | `/login`    | Inicio de sesión (genera JWT)   | ❌ No        |
| GET     | `/users`    | Obtiene la lista de usuarios    | ✅ Sí        |

## 🛠 Tecnologías utilizadas
- **Node.js + Express** - Framework backend
- **MongoDB + Mongoose** - Base de datos
- **jsonwebtoken (JWT)** - Autenticación segura

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**. ¡Siéntete libre de usarlo y mejorarlo! 🚀

