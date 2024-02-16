import {
  Box,
  Button,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Lato } from "@next/font/google";

const inir = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
const meterailUiTheme = createTheme({
  typography: {
    fontFamily: "'__Lato_b8262e', '__Lato_Fallback_b8262e'",
    body1: {
      fontWeight: "500",
      "@media (min-width:600px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
    },
  },
});
const WebsiteIndexPage = () => {
  return (
    <ThemeProvider theme={meterailUiTheme}>
      <div className={inir.className}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            color: "#2188b7",
            fontSize: {
              xs: "2.5rem",
              sm: "3rem",
            },
          }}
          mt={5}
        >
          INDEX PAGE
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            color: "#05543a",
            fontSize: {
              xs: "1.9rem",
              sm: "2.15rem",
            },
          }}
        >
          Different layouts in a single page
        </Typography>

        <Box maxWidth={700} margin="auto" mt={10}>
          <DataTable />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default WebsiteIndexPage;

function createData(
  title: string,
  gitRepo: string,
  deployLink: string,
  info: any
) {
  return {
    title,
    gitRepo,
    deployLink,
    info,
  };
}

const rows = [
  createData(
    "From submission (MUI)",
    "https://github.com/royhirakp/layouts_main/tree/main/components/layout4/",
    "layout4",
    {
      title: "From submission (MUI)",
      Overview: `      
      This component is designed by using
            <strong> Material-UI and react-hook-form</strong> to create a form
            that collects user input . It includes features such as validation,
            error handling, and image file upload. The form is built using the
            react-hook-form library for efficient form management.
      `,
      description: `
      Upon successful form submission, the component show a popup to show
      that the from has submitted successfully, The user fills out the form, 
      and upon submission, the data is displayed in the console as well as in an 
      alert. The signature and terms and conditions are mandatory fields; if not 
      provided, an error popup will appear upon form submission. All error messages 
      will be visible on the webpage.
      `,
    }
  ),
  createData(
    "Layout with Bottom slider (Tailwind css)",
    "https://github.com/royhirakp/layouts_main/tree/main/components/layout1/firstPage",
    "layout1",
    {
      title: "Layout with Bottom slider (Tailwind css)",
      Overview: `      
      This Tailwind CSS layout is designed to create a responsive sliding drawer from the bottom of the screen. It's marked by a clean and modern design, making it suitable for various web applications and projects.
      `,
      description: `
      The Tailwind CSS Responsive Sliding Drawer Layout boasts a contemporary design with a user-friendly sliding drawer that seamlessly opens from the bottom of the screen. Leveraging the power of Tailwind CSS, the layout ensures easy customization of styles, colors, and sizes to align with your project's aesthetic. Its clean and modern UI, coupled with full responsiveness across diverse devices, enhances the overall visual appeal. The layout's simplicity and adaptability make it an ideal choice for various web applications, providing a polished and engaging user experience.
      `,
    }
  ),
  createData(
    "Layout with responsive card (MUI)",
    "https://github.com/royhirakp/layouts_main/tree/main/components/layout2/",
    "layout2",
    {
      title: "Layout with responsive card (MUI)",
      Overview: `      
      This project is a mobile-responsive web application built using Material UI, featuring a sleek and intuitive design. The app leverages the power of Slider JS for an interactive card display on mobile devices, providing an engaging and seamless user experience. The entire application is themed with Material UI to ensure a modern and consistent look and feel.
      `,
      description: `
      The Material UI Responsive Mobile Web App is a cutting-edge project designed with a mobile-first approach, featuring a dynamic and responsive layout. Utilizing Slider JS for an engaging card display on mobile devices, the application ensures a seamless and interactive user experience. Themed with Material UI, it boasts a modern and cohesive design across components, providing a visually appealing and user-friendly interface. The app's adaptability to various screen sizes, coupled with its intuitive card navigation, makes it an ideal choice for creating stylish and functional mobile web applications.
      `,
    }
  ),
  createData(
    "Basic layout (MUI)",
    "https://github.com/royhirakp/layouts_main/tree/main/components/layout3/",
    "layout3",
    {
      title: "Basic layout (MUI)",
      Overview: `      
      This project is a mobile-responsive web application built using Material UI, modern website design.
      `,
      description: `
      
My project utilizes Next.js and Material-UI to create a dynamic and visually appealing web application. , I've crafted an intuitive and responsive webpage layout.
      `,
    }
  ),
];
const DataTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" component="span" mr={1}>
                  Title
                </Typography>
              </TableCell>
              <TableCell align="center">
                <TableTitleS icon={<GitHubIcon />} name="Github" />
              </TableCell>
              <TableCell align="center">
                <TableTitleS icon={<NewspaperIcon />} name="Layout" />
              </TableCell>
              <TableCell align="center">
                <TableTitleS icon={<InfoIcon />} name="Info" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    maxWidth: 120,
                    fontWeight: "600",
                  }}
                >
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <Link href={row.gitRepo} target="_blank">
                    <span className="underline decoration-solid text-red-500 hover:text-black">
                      repo link
                    </span>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={row.deployLink} target="_blank">
                    <span className="underline decoration-solid text-red-500 hover:text-black">
                      {row.deployLink} <OpenInNewIcon />
                    </span>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Stack>
                    <LayoutInformationModal data={row.info} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const TableTitleS = ({ name, icon }: { name: any; icon: any }) => {
  return (
    <>
      <Typography
        variant="h6"
        component="span"
        mr={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <span>{name} </span>
        {icon}
      </Typography>
    </>
  );
};

const LayoutInformationModal = ({ data }: { data: any }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          backgroundColor: "#37a4d5 !important",
          textDecoration: "none",
          textTransform: "none",
        }}
      >
        About
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 1500,
            minWidth: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title: <strong>{data.title}</strong>
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {data.description1}
          </Typography> */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Overview:</strong> {data.Overview}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Play:</strong> {data.description}
          </Typography>
          <Stack mt={2}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                margin: "auto",
              }}
            >
              close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
