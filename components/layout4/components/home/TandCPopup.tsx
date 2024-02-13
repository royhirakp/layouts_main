"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Roboto } from "next/font/google";
const inter = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "700",
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "85%",
    sm: "70%",
    md: 700,
  },
  bgcolor: "background.paper",
  // border: "2px solid #000",

  borderRadius: "5px",
  boxShadow: 24,
  p: {
    xs: 3,
    sm: 4,
    md: 4,
  },
};

export default function TandCPopup({
  setT_and_c_ckeckboxStacus,
  setopenSingAndTandC_warnning,
  watch,
}: {
  setT_and_c_ckeckboxStacus: any;
  setopenSingAndTandC_warnning: any;
  watch: any;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("click");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Stack direction="row">
        <FormControlLabel
          onClick={(e: any) => {
            setT_and_c_ckeckboxStacus(e.target.checked);

            if (
              (watch("BrideSignature") || watch("GroomSignature")) &&
              e.target.checked
            ) {
              setopenSingAndTandC_warnning(false);
            }
          }}
          control={<Checkbox />}
          label=""
          sx={{ margin: 0 }}
        />

        <Stack
          sx={{
            flexDirection: {
              sx: "column",
              sm: "row",
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            I have read and agreed to the{" "}
          </Typography>
          <Typography
            onClick={handleOpen}
            component="span"
            color="error"
            pl={1}
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            Terms & Conditions
          </Typography>
        </Stack>
      </Stack>
      <Modal open={open} sx={{ padding: 0 }}>
        <Box sx={style}>
          <Stack direction="row" justifyContent="space-between" pt={1} pb={1}>
            <Typography
              variant="h5"
              textAlign="center"
              sx={{
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.8rem",
                  md: "1.9rem",
                },
                display: "flex",
                alignItems: "center",
              }}
            >
              Terms & Conditions
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <ContentOfTandC />
        </Box>
      </Modal>
    </Box>
  );
}

const data = [
  {
    title: "TITLE 1",
    decribtion:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?",
  },

  {
    title: "TITLE 2",
    decribtion:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?",
  },
  {
    title: "TITLE 3",
    decribtion:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?",
  },

  {
    title: "TITLE 4",
    decribtion:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?",
  },

  {
    title: "TITLE 5",
    decribtion:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?",
  },

  {
    title: "TITLE 6",
    decribtion:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?",
  },
  {
    title: "TITLE 7",
    decribtion:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?",
  },

  {
    title: "TITLE 8",
    decribtion: `
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?
      
      `,
  },

  {
    title: "TITLE 9",
    decribtion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestias at, alias aliquam magnam neque provident repellendus consectetur placeat inventore eaque minus, explicabo ut recusandae quam eligendi pariatur! Ipsam enim maxime asperiores neque aut dolorem laboriosam laborum autem hic molestias?      ",
  },
];
const ContentOfTandC = () => {
  return (
    <>
      <Stack
        sx={{
          height: {
            xs: "60vh",
          },
        }}
        overflow="auto"
        className={`${inter.variable}`}
      >
        {data.map((item, i) => {
          return (
            <Stack key={i} direction="column" pb={3}>
              <Box fontFamily="roboto">
                <Typography
                  variant="subtitle2"
                  fontFamily="roboto"
                  fontWeight={700}
                >
                  <FiberManualRecordIcon
                    sx={{
                      color: "#000",
                      fontSize: "10px",
                      paddingRight: "2px",
                    }}
                  />{" "}
                  {item.title}:
                </Typography>{" "}
                <Typography variant="body2" fontFamily="roboto" pl={2}>
                  {item.decribtion}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};
