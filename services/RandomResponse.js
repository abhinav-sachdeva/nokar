exports.get = (replyRef) =>{
    let replyRefType = typeof replyRef;
    
    if(replyRefType==="string") return replyRef;

    if ((replyRefType !=="object") || 
    (replyRefType ==="object" && replyRef.length==undefined) ||
    (replyRefType ==="object" && !replyRef.length)){
      return false;
    }

    return replyRef[Math.floor(Math.random()*replyRef.length)];  
  }