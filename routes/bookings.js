const Booking = require('../models/Booking');

async function routes(fastify, options) {
  fastify.post('/bookings', async (request, reply) => {
    try {
      const booking = new Booking(request.body);
      await booking.save();
      reply.code(201).send(booking);
    } catch (err) {
      reply.code(500).send(err);
    }
  });
}

module.exports = routes;
