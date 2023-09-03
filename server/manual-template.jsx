const ReactPDF = require("@react-pdf/renderer");
const React = require("react");
const styles = require("./pdfStyles");
const parseStoreInfo = require("./storeNameSplitter");

const PDF = ({ data }) => {
  const pages = [];

  console.log("data", data.length);

  data.forEach((item, index) => {
    for (let i = 0; i < item.numberOfPallets; i++) {
      const splitStoreName = parseStoreInfo(item.storeName);

      pages.push(
        React.createElement(
          ReactPDF.Page,
          { key: `${index}_${i}`, size: "A4", style: styles.page },

          React.createElement(
            ReactPDF.View,
            { style: styles.container },

            // Top Container

            // new row
            React.createElement(
              ReactPDF.View,
              { style: styles.topContainer },
              React.createElement(ReactPDF.Image, {
                style: styles.image,
                src: "GXO_logo.png",
              }),

              React.createElement(
                ReactPDF.Text,
                { style: styles.topText },

                "BOISE - GXO LOGISTICS"
              ),
              // next two elements in a row

              React.createElement(
                ReactPDF.View,
                { style: styles.newColumn },

                React.createElement(
                  ReactPDF.Text,
                  { style: styles.dateText },
                  "Pick Up Date: ??/??"
                ),
                React.createElement(
                  ReactPDF.Text,
                  { style: styles.dateText },
                  "Due Date: ??/??"
                )
              )
            ),
            React.createElement(
              ReactPDF.View,
              { style: styles.dairyContainer },
              // new column
              React.createElement(ReactPDF.Image, {
                style: styles.dairyImage,
                src: "darigold_logo.png",
              })
            ),

            React.createElement(
              ReactPDF.View,
              { style: styles.middleHolder },
              React.createElement(
                ReactPDF.View,
                { style: styles.middleContainer },
                React.createElement(
                  ReactPDF.View,
                  { style: styles.newColumn },

                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerText },
                    "Customer: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    splitStoreName.storeName
                  )
                )
                // new row
              ),
              React.createElement(
                ReactPDF.View,
                { style: styles.middleContainer },
                React.createElement(
                  ReactPDF.View,
                  { style: styles.newColumn },

                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerText },
                    "DESTINATION: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    splitStoreName.storeCity
                  )
                )
                // new row
              ),
              React.createElement(
                ReactPDF.View,
                { style: styles.middleContainer },

                React.createElement(
                  ReactPDF.View,
                  { style: styles.newColumn },

                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerText },
                    "Store ID: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    splitStoreName.storeId
                  )
                )
              ),
              React.createElement(
                ReactPDF.View,
                { style: styles.middleContainer },

                React.createElement(
                  ReactPDF.View,
                  { style: styles.newColumn },

                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerText },
                    "Store Number: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    splitStoreName.storeNumber
                  )
                )
              ),
              React.createElement(
                ReactPDF.View,
                { style: styles.middleContainer },

                React.createElement(
                  ReactPDF.View,
                  { style: styles.newColumn },

                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerText },
                    "Order Number: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    item.orderNumber
                  )
                )
              )
            ),
            // empty row

            React.createElement(ReactPDF.View, {
              style: styles.emptySpace,
            }),

            React.createElement(
              ReactPDF.View,
              { style: styles.bottomContainer },

              React.createElement(
                ReactPDF.Text,
                { style: styles.paragraph }
                /* "Pallet " + (i + 1) + " of " + item.numberOfPallets */
              ),

              data.length > 1
                ? React.createElement(
                    ReactPDF.Text,
                    { style: styles.paragraph },
                    "DELIVERY #" + (index + 1)
                  )
                : null
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
