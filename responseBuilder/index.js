const ResponseWrapper = require("../services/ResponseWrapper");
const RandomResponse = require("../services/RandomResponse");
const IntentParser = require("../services/IntentParser");
const Mappings = require("../services/Mappings");
const ResponseDB = require("../controllers/responseDB")

exports.buildResponse = function(intent){
  let DBCollection = Mappings.getCollection(intent.name);
  let slot = IntentParser.getSlots(intent);

  //TODO: Query on DBCollection based on slot and slot detail
  let response = null;
  if(ResponseDB[slot.slotCategory])
    response = ResponseDB[slot.slotCategory][slot.slotDetail];
  if(!response)
    response = ResponseDB[slot.slotCategory]["default"];
  let responseSpeech = RandomResponse.get(response);

  return ResponseWrapper.toSSML(responseSpeech,slot.endSession);    
}

exports.nonIntentResponse = function(reqType){
  if(reqType ==="LaunchRequest"){
    slot = {
      slotCategory:"WELCOME",
      slotDetail: "default"
    }
  }else if(reqType === "SessionEndedRequest"){
    slot = {
      slotCategory:"BYE",
      slotDetail: "default",
      endSession:true
    }
  }
  
  let response = ResponseDB[slot.slotCategory][slot.slotDetail];
  let responseSpeech = RandomResponse.get(response);

  return ResponseWrapper.toSSML(responseSpeech,slot.endSession);    
  
}