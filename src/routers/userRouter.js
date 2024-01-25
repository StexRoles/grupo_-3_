// REQUERIR EXPRESS Y USAR ROUTER
const express = require('express');
const router = express.Router();

// MIDLEWARES LOCALES
const validationsRegister = require('../middlewares/validateRegisterMiddleware.js'); // VALIDACIONES REGISTRO
const validationsLogin = require('../middlewares/validateLoginMiddleware.js'); // VALIDACIONES LOGIN
const guestMiddleware = require('../middlewares/guestMiddleware.js'); // EVITA ENTRAR A LOGIN SI YA ESTAS LOGEADO
const authMiddleware = require('../middlewares/authMiddleware.js'); // EVITA ENTRAR A PROFILE SI NO ESTAS LOGEADO

// REQUERIR userController PARA USAR SUS METODOS
const userController = require('../controllers/userController.js');

//---------------------------------------------------------------//

//RUTA PARA EL LOGIN
router.get('/login', guestMiddleware, userController.login);
router.post('/login', validationsLogin, userController.processLogin);

//RUTA PARA EL REGISTRO
router.get('/register', userController.register);
router.post('/register', validationsRegister, userController.processRegister);

//RUTA PARA EL PERFIL
router.get('/profile', authMiddleware, userController.profile);

// RUTA PARA EL LOGOUT
router.get('/logout', userController.logout);

//---------------------------------------------------------------//
// EXPORTAR ROUTER
module.exports = router;