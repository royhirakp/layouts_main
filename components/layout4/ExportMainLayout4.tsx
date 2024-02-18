import React, { useCallback, useEffect, useState } from "react";
import ThemeProvidor from "./ThemeProvidor/ThemeProvidor";
import { Box, Stack, Typography } from "@mui/material";
import HomeContainer from "./container/HomeContainer";
import ThankYou from "./components/home/ThankYou";
import AlartMessege from "./components/home/AlartMessege";
import ErrorPopupComponent from "./components/home/ErrorPopupComponent";
import Website_Logo from "./components/home/Logo";
import PackegeDetails from "./components/home/PackegeDetails";
import Asirbad from "./components/home/Asirbad";
import TandCPopup from "./components/home/TandCPopup";
import SignatureComponet from "./components/home/SignatureComponet";
import SubmitButton from "./components/home/SubmitButton";
import FooterCopyright from "./components/home/FooterCopyright";
import GroomContact from "./components/home/GroomContact";
import BrideContact from "./components/home/BrideContact";
import Panakhili from "./components/home/Panakhili";
import WeadingBidayResaptionEngementDateInput from "./components/home/WeadingBidayResaptionEngementDateInput";

type Inputs = {
  example: string | undefined;
  dateOfFillTheForm: string | undefined;
  bridePhone: string | undefined;
  brideName: string | undefined;
  brideEmail: string | undefined;
  brideAddress: string | undefined;
  groomAddress: string | undefined;
  groomEmail: string | undefined;
  groomName: string | undefined;
  groomPhone: string | undefined;
  anythingExtra: string | undefined;
  engagementDate: string | undefined;
  weadingDate: string | undefined;
  BidayOrBaronDate: string | undefined;
  signature: string | undefined;
  receptionDate: string | undefined;
  nameOfThePackege: {
    title: string;
    Description: string[];
    price: string;
  };
  SelectPackegeType: string | undefined;
  asirbadGroomDate: string | undefined;
  asirbadBrideDate: string | undefined;
  asirbad: string | undefined;
  asirbadDate: string | undefined;
  panakhili: string | undefined;
  panakhiliBrideDate: string | undefined;
  panakhiliDate: string | undefined;
  panakhiliGroomDate: string | undefined;
  haldi: string | undefined;
  haldiBrideDate: string | undefined;
  haldiDate: string | undefined;
  haldiGroomDate: string | undefined;
  checkboxStatus: Boolean;
  signatureIsPresent: Boolean;
  BrideSignature: string; //signature
  GroomSignature: string;
};
import { useForm } from "react-hook-form";
import Haldi from "./components/home/Haldi";
import AnyThingExtraComponent from "./components/home/AnyThingExtraComponent";
const ExportMainLayout4 = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<Inputs>({ mode: "onChange" });
  const [loaderState, setLoaderState] = useState<Boolean>(false);
  const [apiCallErrorStatus, setApicallErrorStatus] = useState<Boolean>(false);
  const [date, setDate] = useState<string>("");
  const [openSingAndTandC_warnning, setopenSingAndTandC_warnning] =
    useState<Boolean>(false);
  const [t_and_c_ckeckboxStacus, setT_and_c_ckeckboxStacus] =
    useState<Boolean>(false);
  const [postSucessThankYou, setPostSucessThankYou] = useState<Boolean>(false);

  const erorrrrrrr = useCallback(
    (name: any) => {
      if (!watch(name)) {
        setError(name, {
          type: "manual",
          message: `${name}`,
        });
      } else {
        clearErrors(name);
      }
    },
    [clearErrors, setError, watch]
  );

  const setErrorMessegeForEmptyField = useCallback(() => {
    // groomPhone
    erorrrrrrr("groomPhone");
    erorrrrrrr("groomName");
    erorrrrrrr("groomEmail");
    erorrrrrrr("groomAddress");
    // brie
    erorrrrrrr("bridePhone");
    erorrrrrrr("brideName");
    erorrrrrrr("brideEmail");
    erorrrrrrr("brideAddress");
    // packege
    erorrrrrrr("nameOfThePackege");
    // wngementfaet
    erorrrrrrr("BidayOrBaronDate");
    erorrrrrrr("receptionDate");
    erorrrrrrr("weadingDate");
    erorrrrrrr("engagementDate");
  }, [erorrrrrrr]);

  const apiCall = useCallback(async () => {
    setLoaderState(true);
    try {
      const formData = new FormData();
      let userData = {
        dateOfFillTheForm: watch("dateOfFillTheForm") || "",
        bridePhone: watch("bridePhone") || "",
        brideName: watch("brideName") || "",
        brideEmail: watch("brideEmail") || "",
        brideAddress: watch("brideAddress") || "",
        groomAddress: watch("groomAddress") || "",
        groomEmail: watch("groomEmail") || "",
        groomName: watch("groomName") || "",
        groomPhone: watch("groomPhone") || "",
        anythingExtra: watch("anythingExtra") || "",
        engagementDate: watch("engagementDate") || "",
        weadingDate: watch("weadingDate") || "",
        bidayOrBaronDate: watch("BidayOrBaronDate") || "",
        receptionDate: watch("receptionDate") || "",
        nameOfThePackege: {
          title: watch("nameOfThePackege").title || "",
          Description: watch("nameOfThePackege").Description || "",
          price: watch("nameOfThePackege").price || "",
        },
        //
        selectPackegeType: watch("SelectPackegeType") || "",
        asirbadGroomDate: watch("asirbadGroomDate") || "",
        asirbadBrideDate: watch("asirbadBrideDate") || "",
        asirbad: watch("asirbad") || "",
        asirbadDate: watch("asirbadDate") || "",
        panakhili: watch("panakhili") || "",
        panakhiliBrideDate: watch("panakhiliBrideDate") || "",
        panakhiliDate: watch("panakhiliDate") || "",
        panakhiliGroomDate: watch("panakhiliGroomDate") || "",
        haldi: watch("haldi") || "",
        haldiBrideDate: watch("haldiBrideDate") || "",
        haldiDate: watch("haldiDate") || "",
        haldiGroomDate: watch("haldiGroomDate") || "",
        signature: watch("BrideSignature") || "",
      };
      formData.append("data", JSON.stringify(userData));
      if (!watch("GroomSignature")) {
        formData.append("signature", watch("BrideSignature"));
      } else {
        formData.append("signature", watch("GroomSignature"));
      }
      console.log("data as user Data=", userData);
      console.log("data as From Data=", formData);

      setPostSucessThankYou(true);
      setTimeout(() => {
        setPostSucessThankYou(false);
        alert(JSON.stringify(userData));
        // window.location.reload();
      }, 1000);
    } catch (error) {
      setApicallErrorStatus(true);
      setTimeout(() => {
        setApicallErrorStatus(false);
      }, 10000);
    }
    setLoaderState(false);
  }, [watch]);

  const onSubmit = (data: any) => {
    // error set
    setErrorMessegeForEmptyField();
    // if the tandC checkbox true and
    if (
      (watch("BrideSignature") || watch("GroomSignature")) &&
      t_and_c_ckeckboxStacus
    ) {
      setopenSingAndTandC_warnning(false);
    } else {
      setopenSingAndTandC_warnning(true);
      return;
    }

    if (
      watch("brideName") === "" ||
      watch("brideEmail") === "" ||
      watch("brideAddress") === "" ||
      watch("bridePhone") === "" ||
      watch("groomName") === "" ||
      watch("groomEmail") === "" ||
      watch("groomAddress") === "" ||
      watch("groomPhone") === ""
    ) {
      // alert("please fill all required ");
      return;
    }
    apiCall();
  };
  useEffect(() => {
    //set todays date in the data and show to the fnd
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;

    setDate(formattedDate);
    setValue("dateOfFillTheForm", formattedDate);
  }, [setValue]);
  return (
    <ThemeProvidor>
      <HomeContainer style={{}}>
        <WebsiteLOGONotificationAlart
          postSucessThankYou={postSucessThankYou}
          setApicallErrorStatus={setApicallErrorStatus}
          apiCallErrorStatus={apiCallErrorStatus}
          t_and_c_ckeckboxStacus={t_and_c_ckeckboxStacus}
          watch={watch}
          setPostSucessThankYou={setPostSucessThankYou}
          openSingAndTandC_warnning={openSingAndTandC_warnning}
        />
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <PackegeDetails
            errors={errors}
            register={register}
            setValue={setValue}
            clearErrors={clearErrors}
          />
          {/* contact deatils */}
          <Box pt={3} pb={3}>
            <BrideContact register={register} errors={errors} />
          </Box>
          <Box pt={3} pb={3}>
            <GroomContact register={register} errors={errors} />
          </Box>

          <Box pt={3} pb={3}>
            <WeadingBidayResaptionEngementDateInput
              errors={errors}
              setValue={setValue}
              clearErrors={clearErrors}
            />
          </Box>

          <Box pt={3} pb={3}>
            <Panakhili
              setValue={setValue}
              errors={errors}
              clearErrors={clearErrors}
              watch={watch}
            />
            <Haldi
              watch={watch}
              setValue={setValue}
              errors={errors}
              clearErrors={clearErrors}
            />
          </Box>
          <Box pt={1} pb={3}>
            <Asirbad
              watch={watch}
              setValue={setValue}
              errors={errors}
              clearErrors={clearErrors}
            />
          </Box>
          <Box pt={5} pb={3}>
            <AnyThingExtraComponent register={register} />
          </Box>
          <Box
            sx={{
              paddingBottom: {
                xs: 3,
              },
            }}
          >
            <SignatureComponet
              watch={watch}
              register={register}
              setValue={setValue}
              t_and_c_ckeckboxStacus={t_and_c_ckeckboxStacus}
              setopenSingAndTandC_warnning={setopenSingAndTandC_warnning}
            />
          </Box>
          <Box pl={1}>
            <Typography fontWeight={600}>Date: {date}</Typography>
          </Box>

          <TandCPopup
            watch={watch}
            setT_and_c_ckeckboxStacus={setT_and_c_ckeckboxStacus}
            setopenSingAndTandC_warnning={setopenSingAndTandC_warnning}
          />
          {Object.keys(errors).length !== 0 && <ErrorMessege errors={errors} />}

          <SubmitButton loaderState={loaderState} />
        </form>
        <FooterCopyright />
      </HomeContainer>
    </ThemeProvidor>
  );
};

export default ExportMainLayout4;

const ErrorMessege = ({ errors }: { errors: any }) => {
  // console.log(errors);
  return (
    <>
      <br />
      <strong>No of totel errors: {Object.keys(errors).length}</strong>
      <br />
      <Stack
        direction="row"
        flexWrap="wrap"
        p={1}
        gap={1}
        sx={{
          background: "red",
          borderRadius: "5px",
          color: "#FFFF",
        }}
      >
        <strong>Errors in :</strong>
        {errors.BidayOrBaronDate && <p>{errors.BidayOrBaronDate.message}</p>}
        {errors.engagementDate && <p>{errors.engagementDate.message}</p>}
        {errors.nameOfThePackege && <p>{errors.nameOfThePackege.message}</p>}
        {errors.receptionDate && <p>{errors.receptionDate.message}</p>}
        {errors.weadingDate && <p>{errors.weadingDate.message}</p>}
        {errors.brideEmail && <p>Bouer email</p>}
        {errors.brideAddress && <p>bouer contact address</p>}
        {errors.brideName && <p>bouer name</p>}
        {errors.bridePhone && <p>Bouer phone</p>}
        {errors.groomAddress && <p>Bor Contact address</p>}
        {errors.groomEmail && <p>Bor email</p>}
        {errors.groomName && <p>bor name</p>}
        {errors.groomPhone && <p>borPhone</p>}
      </Stack>
    </>
  );
};

const WebsiteLOGONotificationAlart = ({
  postSucessThankYou,
  setApicallErrorStatus,
  apiCallErrorStatus,
  t_and_c_ckeckboxStacus,
  watch,
  setPostSucessThankYou,
  openSingAndTandC_warnning,
}: {
  setApicallErrorStatus: any;
  apiCallErrorStatus: any;
  t_and_c_ckeckboxStacus: any;
  watch: any;
  setPostSucessThankYou: any;
  postSucessThankYou: any;
  openSingAndTandC_warnning: any;
}) => {
  return (
    <>
      <>
        <ThankYou
          postSucessThankYou={
            // true
            postSucessThankYou
          }
          setPostSucessThankYou={setPostSucessThankYou}
        />
      </>

      <>
        <AlartMessege
          messegs={`
            ${
              !(watch("BrideSignature") || watch("GroomSignature"))
                ? "sing"
                : ""
            }
            ${
              !(watch("BrideSignature") || watch("GroomSignature")) &&
              !t_and_c_ckeckboxStacus
                ? " & "
                : ""
            }
            
            ${!t_and_c_ckeckboxStacus ? "review T&C " : ""} is required . `}
          openSingAndTandC_warnning={openSingAndTandC_warnning}
        />
      </>
      <>
        <ErrorPopupComponent
          apiCallErrorStatus={apiCallErrorStatus}
          setApicallErrorStatus={setApicallErrorStatus}
        />
      </>
      <Website_Logo />
    </>
  );
};
