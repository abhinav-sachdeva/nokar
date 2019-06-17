const mappings = require("./Mappings");
const random = require("../services/RandomResponse");

exports.getSlots = intent => {
  let parsedSlot = {};
  if (intent.name.indexOf("AMAZON") < 0) {
    mappings.getSlots(intent.name).map(slotName => {
      if (
        intent.slots[slotName].resolutions.resolutionsPerAuthority[0].status
          .code === "ER_SUCCESS_MATCH"
      ) {
        parsedSlot.slotDetail = intent.slots[slotName].value;
        let slotCategories = intent.slots[
          slotName
        ].resolutions.resolutionsPerAuthority[0].values.map(
          category => category.value.name
        );
        parsedSlot.slotCategory = random.get(slotCategories);
      } else {
        parsedSlot = {
          slotCategory: "NOTFOUND",
          slotDetail: "default"
        };
      }
      console.log("parsedSlot: ", parsedSlot);
    });
  } else {
    parsedSlot = {
      slotCategory: mappings.getSlots([intent.name])[0],
      slotDetail: "default",
      endSession:
        intent.name.indexOf("CancelIntent") > 0 ||
        intent.name.indexOf("StopIntent") > 0
    };
    console.log("parsedSlot: ", parsedSlot);
  }
  return parsedSlot;
};
