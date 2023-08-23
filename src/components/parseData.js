function parseData(data) {
    const lines = data.split(/\s{2,}/); // Split data into lines
    const items = [];
    let currentItem = {};
  
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine !== '') {
        if (Object.keys(currentItem).length === 11) {
          items.push(currentItem);
          currentItem = {};
        }
        if (!currentItem['source']) {
          currentItem['source'] = trimmedLine;
        } else if (!currentItem['customer']) {
          currentItem['customer'] = trimmedLine;
        } else if (!currentItem['ponumber']) {
          currentItem['ponumber'] = trimmedLine;
        } else if (!currentItem['ordernumber']) {
          currentItem['ordernumber'] = trimmedLine;
        } else if (!currentItem['pickupdate']) {
          currentItem['pickupdate'] = trimmedLine;
        } else if (!currentItem['duedate']) {
          currentItem['duedate'] = trimmedLine;
        } else if (!currentItem['shipmentnumber']) {
          currentItem['shipmentnumber'] = trimmedLine;
        } else if (!currentItem['carrier']) {
          currentItem['carrier'] = trimmedLine;
        } else if (!currentItem['numberofpallets']) {
          currentItem['numberofpallets'] = trimmedLine;
        } else if (!currentItem['deliverysequence']) {
          currentItem['deliverysequence'] = trimmedLine;
        } else if (!currentItem['region']) {
          currentItem['region'] = trimmedLine;
        }
      }
    }
  
    items.push(currentItem); // Push the last item
    console.log('items', items)
    return items;
  }

  export default parseData;
