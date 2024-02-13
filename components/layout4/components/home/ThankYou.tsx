import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AnimatedTicMark from "./AnimatedTicMark";
import { Stack } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 250,
    sm: 400,
  },

  bgcolor: "background.paper",
  boxShadow: 24,
  p: {
    xs: 2,
    sm: 4,
  },
};

export default function ThankYou({
  postSucessThankYou,
  setPostSucessThankYou,
}: {
  postSucessThankYou: any;
  setPostSucessThankYou: any;
}) {
  const handleClose = () => setPostSucessThankYou(false);

  return (
    <div>
      <Modal
        open={postSucessThankYou}
        onClose={handleClose}
        sx={{ borderRadius: "10px" }}
      >
        <Box sx={style} borderRadius="15px">
          <Stack justifyContent="center" direction="row">
            <AnimatedTicMark />
          </Stack>
          <Typography p={2} variant="h3" textAlign="center" color="primary">
            data submitted
          </Typography>
          <Typography textAlign="center" variant="subtitle1" p={2}>
            data will show in the alert
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
