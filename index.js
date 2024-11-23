const express = require('express');
const AlmacenRoutes = require('./routes/almacenRoutes');
const ClienteRoutes = require('./routes/clienteRoutes');
const ProveedorRoutes = require('./routes/proveedorRoutes');
const UsuarioRoutes = require('./routes/usuarioRoutes');
const OrdenDeCompraRoutes = require('./routes/ordenDeCompraRoutes');
const ProductosRoutes = require('./routes/productosRoutes');
const VentasRoutes = require('./routes/ventasRoutes');
const RegistroAccesoRoutes = require('./routes/registroAccesoRoutes'); // Importar rutas de registro_acceso

require('dotenv').config();

const app = express();
app.use(express.json());

// Configuración de rutas
app.use('/api', AlmacenRoutes);
app.use('/api', ClienteRoutes);
app.use('/api', ProveedorRoutes);
app.use('/api', UsuarioRoutes);
app.use('/api', OrdenDeCompraRoutes);
app.use('/api', ProductosRoutes);
app.use('/api', VentasRoutes);
app.use('/api', RegistroAccesoRoutes); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT ' + PORT);
});
