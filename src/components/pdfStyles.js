const ReactPDF = require("@react-pdf/renderer");

const styles = ReactPDF.StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  heading: {
    fontSize: 36, // Increased font size
    fontWeight: 600,
    color: "#131925",
    marginBottom: 16, // Increased margin
    textTransform: "uppercase", // Capitalize text
    textAlign: "center", // Center align text
  },
  statement: {
    fontSize: 70, // Increased font size
    color: "#131925",
    lineHeight: 1.6, // Adjusted line height
    marginBottom: 8, // Increased margin
    textAlign: "center", // Center align text\
    /* background collor to be bright yellow */
    backgroundColor: "#FFD700",
  },
  highlighted: {
    backgroundColor: "#FFD700", // Highlight color
    padding: 4,
  },
  divider: {
    width: "80%", // Adjusted width
    height: 1,
    backgroundColor: "#999999",
    marginVertical: 24,
  },
  paragraph: {
    fontSize: 45, // Increased font size
    color: "#212935",
    lineHeight: 1.5, // Adjusted line height
    textTransform: "uppercase", // Capitalize text
    textAlign: "center", // Center align text
  },
  columnParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnStart: {
    flex: 1,
  },
  columnEnd: {
    flex: 1,
    alignItems: "flex-end",
  },


  headerContainer: {
    marginBottom: 24, // Add margin to separate header from other content
    alignItems: "center", // Center align content horizontally
  },
  /* center image and make it look natural */
  image: {
    maxWidth: 250,
    height: "auto",
    marginRight: 16,
    marginTop: 16,

    marginBottom: 16, // Add spacing below the image
  },
  storeName: {
    fontSize: 56, // Adjust font size
    fontWeight: "bold", // Set font weight to bold
    color: "#131925",
    textTransform: "uppercase",
  },
});

module.exports = styles;