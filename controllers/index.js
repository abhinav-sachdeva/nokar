const log = console.log;
const responseDB = require("./responseDB")
const responseBuilder = require("../responseBuilder")
// SSML ref: https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html
module.exports = {
  alexaResponse: (req,res) => {
    // console.log(req.body.request)
    if(req.body.request.type === "LaunchRequest"){
      return res.send(responseBuilder.nonIntentResponse("LaunchRequest"));
    }else if(req.body.request.type ==="SessionEndedRequest"){
      return res.send(responseBuilder.nonIntentResponse("SessionEndedRequest"));
    }

    let intent = req.body.request.intent
    res.send(responseBuilder.buildResponse(intent));
  }
}