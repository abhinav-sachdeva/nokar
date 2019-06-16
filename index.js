const fastify = require("fastify")({
  maxParamLength: 50,
  onProtoPoisoning: "remove"
});

// Import Routes
const routes = require("./routes");

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0");
    console.log(`Listening for incoming requests.`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();