import { Button, Stack } from "@mui/material";

const ContactUsButton = ({ text, onclick }: { text: any; onclick: any }) => {
  return (
    <Stack
      sx={{
        paddingLeft: {
          xs: "5px",
          md: "50px",
        },
        display: {
          xs: "none",
          md: "flex",
        },
      }}
      direction="row"
      alignItems="center"
      // className="right-animate"
      // data-scroll
    >
      <Button
        color="secondary"
        variant="contained"
        id="contactButtonFromLayout2"
        sx={{
          minWidth: "156px",
          borderRadius: "50px",
          height: "42px",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: 700,
          color: "#ffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "none",
          backgroundColor: "secondary.main",
          ":hover": {
            backgroundColor: "secondary.main",
          },
        }}
        onClick={onclick}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default ContactUsButton;
