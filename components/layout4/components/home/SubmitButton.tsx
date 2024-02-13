import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

const SubmitButton = ({ loaderState }: { loaderState: Boolean }) => {
  return (
    <Stack direction="row" justifyContent="center" pt={2} pb={5}>
      <LoadingButton
        className="submitButtonForlayout4"
        variant="contained"
        loading={loaderState === true}
        size="large"
        type="submit"
        sx={{
          padding: "5px 75px",
          fontSize: {
            xs: "1.5rem",
            sm: "1.6rem",
          },
          backgroundColor: "#476232",
          "&:hover": {
            backgroundColor: "#2d3f20",
          },
          textTransform: "none",
          color: "#ffff",
          ".MuiLoadingButton-loadingIndicator": {
            fontSize: "30px",
          },
        }}
      >
        Submit
      </LoadingButton>
    </Stack>
  );
};

export default SubmitButton;
