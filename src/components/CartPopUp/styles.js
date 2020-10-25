export const Styles = (theme) => ({
  card: {
    padding: "40px 20px 20px",
    height: 600,
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      height: 350,
    },
  },
  cartTitleCover: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  close: {
    cursor: "pointer",
    position: "absolute",
    top: "15px",
    right: "20px",
    backgroundColor: "#ccc",
    borderRadius: 50,
    fontSize: 12,
    padding: 4,
  },
});
