"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FileUpload({
  title,
  setValue,
  watch,
  t_and_c_ckeckboxStacus,
  setopenSingAndTandC_warnning,
}: {
  title: any;
  register: any;
  setValue: any;
  watch: any;
  t_and_c_ckeckboxStacus: any;
  setopenSingAndTandC_warnning: any;
}) {
  const [image, setImage] = React.useState<any>("");

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ height: 40, width: 90 }}
      pl={1}
      // minWidth={10}
    >
      {watch(`${title}Signature`) ? (
        <>
          <Stack direction="column" sx={{ position: "relative" }}>
            <Box sx={{ height: 40, width: 80 }}>
              <Image
                src={URL.createObjectURL(image)}
                alt="singnature"
                width={80}
                height={36}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid #437C17",
                  borderRadius: "7px",
                }}
              />
            </Box>
            <Box>
              <IconButton
                onClick={() => setValue(`${title}Signature`, undefined)}
                sx={{
                  padding: "0px",
                  border: "2px solid red",
                  background: "#a75555",
                  ":hover": {
                    background: "#a75555",
                  },
                  position: "relative",
                  bottom: 50,
                  left: 67,
                  display: "flex",
                }}
              >
                <CloseIcon
                  color="action"
                  sx={{
                    fontSize: "20px",
                    color: "red",
                  }}
                />
              </IconButton>
            </Box>
          </Stack>
        </>
      ) : (
        <>
          <Button
            component="label"
            variant="text"
            startIcon={<CloudUploadIcon />}
            sx={{
              backgroundColor: "#ffff",
              border: "1px solid #437C17",
              color: "#437C17",
              padding: {
                xs: "7px 60%",
                sm: "5px 60%",
              },
              "&:hover": {
                backgroundColor: "#ffff",
              },
              fontSize: {
                sx: "1px",
              },
            }}
          >
            signature
            <VisuallyHiddenInput
              onChange={(e: any) => {
                const file = e.target.files[0];
                setImage(file);
                setValue(`${title}Signature`, file);
                if (
                  t_and_c_ckeckboxStacus &&
                  (watch("BrideSignature") || watch("GroomSignature"))
                ) {
                  setopenSingAndTandC_warnning(false);
                }
              }}
              type="file"
              accept="image/*"
            />
          </Button>
        </>
      )}
    </Box>
  );
}
