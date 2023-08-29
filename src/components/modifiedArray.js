const fixArray = async (originalArray) => {

    originalArray.map((obj) => {
        const { region, ...rest } = obj;
        return rest;
      });

}

module.exports = fixArray;



