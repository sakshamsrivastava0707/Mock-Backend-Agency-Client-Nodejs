module.exports.outputMessages = {
  // Generic
  success: "Successfully performed required operation!.", // Default success message
  server_err: "Unknown Internal Server error occurred.", // Unknown Server error
  mandatory_field: "Please fill all mandatory input fields.", // Mandatory fields data not sent in request
  error404:
    "This functionality may be deprecated. Please contact the Admin regarding this issue.", // API endpoint not found error
  redisError: "Could not connect or retrieve data from the database.", // Redis error
  badRequest400:"Bad Request",
  // JOI Validation error messages
  //........ Invalid Data Type
  invalidType: "invalid data entered",
  invalidTypeNumber: "should be of type Number",
  invalidTypeString: "should be of type String",
  invalidTypeObject: "should be of type Object",
  invalidTypeArray: "should be of type Array",
  invalidTypeBoolean: "should be of type Boolean",

  //........ Empty Input Data Type
  emptyData: "Cannot be empty.",

  //........ Required Minimum Length
  minimalLength: "Required minimum length.",
  required: "Required Field.",

  //........ Invalid data format
  wrongFormat: "Invalid data format.",

  // 
  successFullyUpdatedClient : "Client Details Successfully updated",
  successFullyAddedClientAndAgency: "SuccessFully added Client and Agency",
  successFullyRetrievedTopClientsOfAgency:"SuccessFully retrieved List Of Top Clients From Agency"

};
