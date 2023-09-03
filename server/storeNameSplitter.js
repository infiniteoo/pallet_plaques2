function parseStoreInfo(inputString) {
  // Split the input string by the '-' character
  const parts = inputString.split(" - ");

  // Extract store ID
  const storeId = parts[0].trim();

  // Extract store name
  const storeNameAndCity = parts[1].trim();

  const storeParts = storeNameAndCity.split(" ");
  const storeName = storeParts[0];
  const storeCity = storeParts[1];
  const storeNumber = storeParts[2];

  // Return an object with the parsed information
  return {
    storeId,
    storeName,
    storeCity,
    storeNumber,
  };
}

module.exports = parseStoreInfo;
