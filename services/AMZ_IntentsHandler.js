const random = require("./RandomResponse");

const actionResp = ({actionCategory,actionDetail},endSessionFlag) =>{
  let responseSpeech = null;
  if(!responseDB[actionCategory]) {
    log("actionCategory NOT FOUND: ",actionCategory);
    responseSpeech = random.get( responseDB["NOTFOUND"]["default"]);
  }
  else if(responseDB[actionCategory] && !responseDB[actionCategory][actionDetail]) {
    log(`actionCategory FOUND(${actionCategory}). actionDetail NOT FOUND(${actionDetail})`);
    responseSpeech = random.get(responseDB[actionCategory].default);
  }
  else {
    log("actionCategory FOUND. actionDetail FOUND");
    responseSpeech = random.get(responseDB[actionCategory][actionDetail]);
  }
    

  return {
    "version": "1.0",
    "sessionAttributes": {
    },
    "response": {
      "outputSpeech": {
        "type": "SSML",
        "ssml": `<speak><prosody rate="fast">${responseSpeech}</prosody></speak>`,
        "playBehavior": "REPLACE_ENQUEUED"      
      },
      "shouldEndSession": (() => endSessionFlag ? true : false)()
    }
  }
}