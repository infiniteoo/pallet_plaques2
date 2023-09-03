const ReactPDF = require("@react-pdf/renderer");

const styles = ReactPDF.StyleSheet.create({
  page: {
    fontFamily: "Helvetica",

    border: 4, // Add border
    borderColor: "red",
    borderStyle: "dotted",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    display: "flex",
  },
  dairyContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
  middleHolder: {
    justifyContent: "space-evenly",
  },

  emptySpace: {
    height: "15%",
  },

  middleContainer: {
    flexDirection: "row",

    alignItems: "stretch",
    paddingRight: 20,
  },
  customer: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
    marginLeft: 20,
    // center text
    textAlign: "center",
  },
  paragraph: {
    fontSize: 35,
    color: "grey",

    // center text
  },

  dateText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "gray",
    textAlign: "right",
  },
  customerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    textAlign: "left",
    justifyContent: "start",
    textTransform: "uppercase",
  },
  customerName: {
    fontSize: 45,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
    marginLeft: 20,
    // center text
    textAlign: "center",
    textTransform: "uppercase",
  },
  newColumn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    marginLeft: 20, // Adjust this value as needed
    display: "flex", // Add this property to enable flex layout
    justifyContent: "space-between", // Space out evenly
  },
  newRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 20, // Adjust this value as needed
    display: "flex", // Add this property to enable flex layout
    justifyContent: "space-between", // Space out evenly
  },
  dairyImage: {
    height: "50%",
    marginTop: 15
  },
  dairyText: {
    fontSize: 18,

    color: "grey",
    textAlign: "center",
    justifyContent: "start",
  },

  image: {
    width: "20%",
    height: "auto",
  },
  topTextContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  topText: {
    fontSize: 24,
    color: "black",
    marginBottom: 5,
    
    fontWeight: "bold",

    textAlign: "left",
  },
  divider: {
    height: 2,
    backgroundColor: "gray",
    marginBottom: 20,
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    marginRight: 5,
    width: "30%",
  },
  value: {
    fontSize: 14,
    width: "70%",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  bottomText: {
    fontSize: 14,
  },
});

module.exports = styles;
