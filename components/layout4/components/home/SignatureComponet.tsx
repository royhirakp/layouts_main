import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FileUplode from "../home/FileUplode";
const SignatureComponet = ({
  register,
  setValue,
  watch,
  t_and_c_ckeckboxStacus,
  setopenSingAndTandC_warnning,
}: {
  setValue: any;
  register: any;
  watch: any;
  t_and_c_ckeckboxStacus: any;
  setopenSingAndTandC_warnning: any;
}) => {
  return (
    <>
      <Box
        sx={{
          p: "12px 4px 0px 4px",
          display: "flex",
          flexDirection: "row",
          "@media (max-width: 300px)": {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          },
          justifyContent: "space-between",
          minHeight: 100,
        }}
      >
        {/* owner sing */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {[
            {
              src: "/dataForLayout4/logo-removebg-preview.png",
              name: "SIGNATURE",
              position: "Owner",
            },
          ].map((item, i) => {
            return (
              <Box
                sx={{
                  "& .Owner-name": {},
                  "& .Owner-position": {
                    fontSize: "14px",
                  },
                }}
                key={i}
              >
                <Box
                  sx={{
                    minWidth: "fit-content",
                  }}
                >
                  <Image src={item.src} width={80} height={50} alt="" />
                  <Typography variant="body1" className="Owner-name">
                    {item.name?.[0].toUpperCase() + item.name?.slice(1)}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        {/* coustomer sing uplode */}
        <Stack direction="column">
          <Typography variant="body1" pb={1} minWidth={110}>
            Upload Signatures
          </Typography>
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
            flexWrap="nowrap"
            gap={1}
          >
            {["Bride"].map((item, i) => {
              return (
                <Box pr={2} key={i} sx={{}}>
                  <FileUplode
                    title={item}
                    watch={watch}
                    register={register}
                    setValue={setValue}
                    t_and_c_ckeckboxStacus={t_and_c_ckeckboxStacus}
                    setopenSingAndTandC_warnning={setopenSingAndTandC_warnning}
                  />
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default SignatureComponet;
