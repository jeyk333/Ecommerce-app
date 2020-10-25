export const Styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    flex: 1,
    "& img": {
      width: "8%",
      [theme.breakpoints.down("sm")]: {
        width: "20%",
      },
    },
  },
  icon: {
    cursor: "pointer",
  },
});
