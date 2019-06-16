const collections = {
    "whatIsIntent":"Collection1",
    "AMAZON.FallbackIntent":"AMZCollection",
    "AMAZON.CancelIntent":"AMZCollection",
    "AMAZON.HelpIntent":"AMZCollection",
    "AMAZON.StopIntent":"AMZCollection",
    "AMAZON.NavigateHomeIntent":"AMZCollection"
}
const slots = {
    "whatIsIntent":["whatIsSlot"],
    "AMAZON.FallbackIntent":["NOTFOUND"],
    "AMAZON.CancelIntent":["BYE"],
    "AMAZON.HelpIntent":["HELPUSER"],
    "AMAZON.StopIntent":["BYE"],
    "AMAZON.NavigateHomeIntent":["BYE"]
}

exports.getCollection = intent => intent.name ? collections[intent.name] : collections[intent];
exports.getSlots = intent => intent.name? slots[intent.name] : slots[intent]