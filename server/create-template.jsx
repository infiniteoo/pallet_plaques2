const ReactPDF = require("@react-pdf/renderer");
const React = require("react");
const styles = require("./pdfStyles");
const parseStoreInfo = require("./storeNameSplitter");

const PDF = ({ data }) => {
  /* reverse the order of the data array */
  data.reverse();

  const pages = [];

  /* loops over each object in data to create a page */
  data.forEach((item, index) => {
    for (let i = 0; i < item.numberOfPallets; i++) {
      const splitStoreName = parseStoreInfo(item.storeName);

      pages.push(
        React.createElement(
          ReactPDF.Page,
          { key: `${index}_${i}`, data: item },
          React.createElement(
            ReactPDF.View,
            { style: styles.headerContainer },
            React.createElement(
              ReactPDF.View,
              { style: styles.columnParent },
              React.createElement(ReactPDF.Image, {
                style: styles.image,
                src: "GXO_logo.png",
              })
            ),
            React.createElement(
              ReactPDF.Text,
              { style: styles.storeName },
              item.storeName
            ),
            React.createElement(ReactPDF.View, { style: styles.divider }),
            React.createElement(
              ReactPDF.View,
              null,
              React.createElement(
                ReactPDF.Text,
                { style: styles.statement },
                item.orderNumber
              ),
              React.createElement(
                ReactPDF.Text,
                { style: styles.paragraph },
                "Pallet " + (i + 1) + " of " + item.numberOfPallets
              ),
              React.createElement(
                ReactPDF.Text,
                { style: styles.paragraph },
                "Delivery " + (index + 1) + " of " + data.length
              )
            )
          )
        )
      );
    }
  });
  return React.createElement(ReactPDF.Document, null, pages);
};

module.exports = async function renderPDF(data) {
  const stream = await ReactPDF.renderToStream(
    React.createElement(PDF, { data })
  );
  return stream;
};
