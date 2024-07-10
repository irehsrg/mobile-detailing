const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const cors = require('@fastify/cors');
const bookingRoutes = require('./routes/bookings');

// Enable CORS
fastify.register(cors, { 
  origin: '*' // Customize this according to your needs
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mobile-detailing')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Register routes
fastify.register(bookingRoutes);

// Define a simple route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 5000, host: '127.0.0.1' });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
