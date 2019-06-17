exports.get = replyRef => {
  let replyRefType = typeof replyRef;

  if (replyRefType === "string") return replyRef;

  if (
    replyRefType !== "object" ||
    (replyRefType === "object" && replyRef.length == undefined) ||
    (replyRefType === "object" && !replyRef.length)
  ) {
    return false;
  }

  let randomElem = replyRef[Math.floor(Math.random() * replyRef.length)];
  let responseText = null;
  const elemType = typeof randomElem;
  if (elemType === "string") return randomElem;
  if (elemType === "object" && !(randomElem.prefix || randomElem.suffix))
    return randomElem.text;
  responseText = randomElem.text;
  if (elemType === "object" && randomElem.prefix) {
    responseText = `${randomElem.prefix[
      Math.floor(Math.random() * randomElem.prefix.length)
    ]} ${responseText}`;
  }
  if (elemType === "object" && randomElem.suffix) {
    responseText = `${responseText} ${randomElem.suffix[
      Math.floor(Math.random() * randomElem.suffix.length)
    ]}`;
  }
  return responseText;
};
