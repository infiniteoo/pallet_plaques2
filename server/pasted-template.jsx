const ReactPDF = require("@react-pdf/renderer");
const React = require("react");
const styles = require("./pdfStyles");
const costcoStoreName = require("./costcoStoreName");

const PDF = ({ data }) => {
  console.log("data", data);
  const pages = [];

  data.forEach((item, index) => {
    console.log("item.customer", item.customer);
    let splitStoreName = costcoStoreName(item.customer);

    for (let i = 0; i < item.numberofpallets; i++) {
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

              React.createElement(
                ReactPDF.Text,
                { style: styles.topText },

                item.source
              ),
              // next two elements in a row

              React.createElement(
                ReactPDF.View,
                { style: styles.newColumn },

                React.createElement(
                  ReactPDF.Text,
                  { style: styles.dateText },
                  "Pick Up Date: " + item.pickupdate
                ),
                React.createElement(
                  ReactPDF.Text,
                  { style: styles.dateText },
                  "Due Date: " + item.duedate
                )
              )
            ),
            React.createElement(
              ReactPDF.View,
              { style: styles.dairyContainer },
              // new column
              React.createElement(ReactPDF.Image, {
                style: styles.dairyImage,
                src: "GXO_logo.png",
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
                  /*  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    splitStoreName.storeName
                  ), */
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    splitStoreName.storeNameAndNumber
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
                    "Carrier: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    item.carrier
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
                    "Order Number: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    item.ordernumber
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
                    "Shipment Number: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    item.shipmentnumber
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
                    "PO Number: "
                  ),
                  React.createElement(
                    ReactPDF.Text,
                    { style: styles.customerName },

                    item.ponumber
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
                /* "Pallet " + (i + 1) + " of " + item.numberofpallets */
              ),
              React.createElement(
                ReactPDF.Text,
                { style: styles.paragraph },
                "DELIVERY #" + item.deliverysequence
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
