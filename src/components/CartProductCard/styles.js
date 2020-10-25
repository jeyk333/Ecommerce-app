export const Styles = () => ({
  card: {
    width: "100%",
    borderBottom: "1px solid #ccc",
    paddingBottom: 5,
    marginBottom: 5,
    position: "relative",
  },
  details: {
    marginLeft: 20,
  },
  name: {
    fontSize: 16,
    color: "#282c3f",
    fontWeight: 500,
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    color: "#535766",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  price: {
    fontSize: 16,
    color: "#282c3f",
    fontWeight: 500,
  },
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
    color: "#ccc",
  },
});
