import { Box } from "@mui/material";
import Image from "next/image";

const Website_Logo = () => {
  return (
    <>
      <Box
        sx={{
          height: "150px",
          width: "40%",
          minWidth: "270px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          paddingTop: {
            xs: 3,
            sm: 5,
          },
        }}
      >
        <Image
          src="/dataForLayout4/logo-removebg-preview.png"
          width={100}
          height={100}
          style={{ width: "100%", height: "100%" }}
          alt="website logo"
        />
      </Box>
    </>
  );
};

export default Website_Logo;
