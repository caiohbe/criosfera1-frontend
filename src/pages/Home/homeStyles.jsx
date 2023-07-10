const homeSx = {
  Container: {
    sx: {
      marginTop: 7,
      display: "flex",
    },
    boxLeft: {
      sx: { height: "80vh", width: "50%", textAlign: "center" },
      typographyH3: {
        sx: { marginTop: 1 },
      },
      typographyH2: {
        sx: { marginTop: 1, marginBottom: 4, fontSize: 45 },
      },
    },
    boxRight: { sx: {} },
    criosferaGif: {
      sx: {
        height: "400px",
        paddingLeft: 0,
      },
    },
    buttonLeft: {
      sx: {
        color: "secondary.main",
        fontWeight: 700,
        width: 180,
        height: 55,
      },
    },
    buttonRight: {
      sx: {
        width: 180,
        height: 55,
        marginLeft: 1,
      },
    },
  },
}

export { homeSx }
