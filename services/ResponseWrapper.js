exports.toSSML = function(ssml,endSession = false){
    // let sessionEndFlag = endSession && typeof endSession === "boolean" ? true : false ;
    return {
        "version": "1.0",
        "sessionAttributes": {
        },
        "response": {
          "outputSpeech": {
            "type": "SSML",
            "ssml": `<speak><prosody rate="fast">${ssml}</prosody></speak>`,
            "playBehavior": "REPLACE_ENQUEUED"      
          },
          "shouldEndSession": endSession
        }
      }
}
exports.toText = function(responseText,endSession = false){
  // let sessionEndFlag = endSession && typeof endSession === "boolean" ? true : false ;
    return {
        "version": "1.0",
        "sessionAttributes": {
        },
        "response": {
          "outputSpeech": {
            "type": "PlainText",
            "text": `${responseText}`,
            "playBehavior": "REPLACE_ENQUEUED"      
          },
          "shouldEndSession": endSession
        }
      }
}
