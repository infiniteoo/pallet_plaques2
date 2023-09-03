const costcoStoreName = (store) => {
    const parts = store.split(' ');
    const storeNameAndNumber = parts.slice(0, 2).join(' ');
    const storeCity = parts.slice(2).join(' ');

    return {
        storeNameAndNumber: storeNameAndNumber,
        storeCity: storeCity
    };
};

module.exports = costcoStoreName;
