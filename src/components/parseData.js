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
        if (!currentItem['Source']) {
          currentItem['Source'] = trimmedLine;
        } else if (!currentItem['Customer']) {
          currentItem['Customer'] = trimmedLine;
        } else if (!currentItem['PO Number']) {
          currentItem['PO Number'] = trimmedLine;
        } else if (!currentItem['Order Number']) {
          currentItem['Order Number'] = trimmedLine;
        } else if (!currentItem['Pick Up Date']) {
          currentItem['Pick Up Date'] = trimmedLine;
        } else if (!currentItem['Due Date']) {
          currentItem['Due Date'] = trimmedLine;
        } else if (!currentItem['Shipment Number']) {
          currentItem['Shipment Number'] = trimmedLine;
        } else if (!currentItem['Carrier']) {
          currentItem['Carrier'] = trimmedLine;
        } else if (!currentItem['Number of Pallets']) {
          currentItem['Number of Pallets'] = trimmedLine;
        } else if (!currentItem['Delivery Sequence']) {
          currentItem['Delivery Sequence'] = trimmedLine;
        } else if (!currentItem['Region']) {
          currentItem['Region'] = trimmedLine;
        }
      }
    }
  
    items.push(currentItem); // Push the last item
    console.log('items', items)
    return items;
  }

  export default parseData;
