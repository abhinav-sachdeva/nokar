// Import Controllers
const ctrl = require("../controllers");
const routes = [
    {
        method: "POST",
        url: "/api/alexa",
        handler: ctrl.alexaResponse
    },
      {
        method: "GET",
        url: "/api/alexa",
        handler: ctrl.alexaResponse
      }
];

module.exports = routes;