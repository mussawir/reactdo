import React, { useEffect } from "react";
import axios from "axios";
import "../Basic/Basic.css";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import TopBar from "./../../../Dashborad/TopBar/TopBar";

type Props = {};

let formData = new FormData();
// let vd = new FormData();

const Basic = (props: Props) => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [title, settitle] = React.useState("");
  const [subTitle, setSubTitle] = React.useState("");
  const [websiteUrl, setWebsiteUrl] = React.useState("");
  const [projectImage, setProjectImage] = React.useState("");
  const [File, SetFile] = React.useState("");
  const [video, setVideo] = React.useState("");
  const [targetLaunchDate, setTargetLaunchDate] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [cDFixed, setCDFixed] = React.useState("");

  let imagefile: string;


  const handleSubmit = (e: any) => {

    
    e.preventDefault();
    saveBasicInfo();
   //updateFileName("newfile.jpg"); 
  }
 
  const saveBasicInfo= () =>{
    axios
    .patch("http://localhost:5000/project/basic/" + projectId, {
      title: title,
      subTitle: subTitle,
       video: video,
      projectImage:projectImage,
      websiteUrl: websiteUrl,
      targetLaunchDate: targetLaunchDate,
      duration: duration,
      cDFixed: cDFixed,
    })
    .then((res) => {
   //   console.log(res, "Result");
    //  console.log("Basic Screen image name", res.data.projectImage);
    uploadFile();
    })
    .catch((err) => {
      console.log(err, "error");
    });

  }


  const uploadFile = () =>{
    if(formData.get("image") !==null){
      axios
       //.post("http://localhost:5000/fileupload/one", formData)
      .post("http://localhost:5000/project/basicfile/" + projectId ,formData)
      .then((response) => {
        SetFile(response.data);
       
        imagefile = response.data.filename;
     console.log(imagefile,"Image Name Here");
    updateFileName(imagefile);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  }
  //myfilename:string
  const updateFileName = (filename: string) => {
    axios
    .patch("http://localhost:5000/project/updateProjectImage/" + projectId, {'projectImage' : filename,'video' : filename} )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
  };
 

  const [formats, setFormats] = React.useState(() => [
    "bold",
    "italic",
    "underlined",
  ]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };
 
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const toFunding = (projectId: any) => {
    // 👇️ navigate to /
    navigate("/fundingtab/" + projectId);
  };

  return (
    <>
      <TopBar />
      <Grid>
        <Grid xs={12} sm={10} md={12} lg={6}>
          <Typography id="PeopleScreensTypo1">
            Start your new project
          </Typography>
          <Typography id="PeopleScreensTypo2">
            Make it easy for people to learn about your project.
          </Typography>
        </Grid>
        <Divider id="dividerafterpeopletypo2" />
        <Grid container id="TypOofStory3">
          <Grid xs={12} sm={10} md={12} lg={5}>
            <Typography id="Typoheadingofgrid2">Project title</Typography>
            <Typography id="paraofstoryscreenz">
              Write a clear, brief title and subtitle to help<br></br> people
              quickly understand your project. Both will appear on <br></br>
              your project and pre-launch pages.
              <br></br>
              <br></br>
              Potential backers will also see them if your project <br></br>
              appears on category pages, search results, or in<br></br> emails
              we send to our community.
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={7} id="Grid2peopleScreen4">
            <Box
              sx={{
                width: "100%",
                maxWidth: "120%",
                borderRadius: "0%",
              }}
            >
              <Typography id="FieldText">Title</Typography>
              <Grid id="fullWidthxx">
                <TextField
                  style={{ width: "100%" }}
                  required
                  size="small"
                  id="outlined-required"
                  // label="Title"
                  type="text"
                  placeholder="Radiotopia: A Storytelling Revolution"
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </Grid>
            </Box>

            <br></br>
            <br></br>
            <Box
              sx={{
                width: "100%",
                maxWidth: "120%",
                borderRadius: "0%",
              }}
            >
              <Typography id="FieldText">Subtitle</Typography>
              <Grid id="fullWidthxx">
                <TextField
                  required
                  style={{ width: "100%" }}
                  size="small"
                  id="outlined-required"
                  type="text"
                  placeholder="We are a collective of amazing storytelling radio shows. Let's remake public radio together."
                  value={subTitle}
                  onChange={(e) => {
                    setSubTitle(e.target.value);
                  }}
                />
              </Grid>
            </Box>
            <Box>
              <Button color="success" id="buttonofstoryscreen4">
                <LocationOnIcon /> Give backers the best first impression of
                your project with great titles. Learn more..
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider id="dividerafterpeopletypo2" />
        {/* <Grid container id="TypOofStory3">
          <Grid xs={12} sm={12} md={8} lg={5} id="fourField">
            <Typography id="Typoheadingofgrid2">Project category</Typography>
            <Typography id="paraofstoryscreenz">
              Choose a primary category and subcategory to help backers
              <br></br> find your project.
              <br></br>
              <br></br>
              Your second subcategory will help us provide more relevant
              <br></br> guidance for your project. It won’t display on your
              project<br></br> page or affect how it appears in search results.
              <br></br>
              <br></br>
              You can change these anytime before and during your<br></br>{" "}
              campaign.
            </Typography>
          </Grid>
          <Grid xs={12} sm={10} md={8} lg={3} id="Grid2peopleScreen4">
            <Grid id="somegaponsubcat">
              <Box sx={{}}>
                <Typography id="FieldText">Primary category</Typography>
                <TextField
                  id="outlined-select-currency"
                  style={{ width: "100%" }}
                  size="small"
                  select
                  fullWidth
                  value={currency}
                  onChange={handleChange}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Grid id="textfieldsubcategoryss">
                  <Typography id="FieldText">Category</Typography>
                  <TextField
                    id="outlined-select-currency"
                    style={{ width: "100%" }}
                    size="small"
                    select
                    fullWidth
                    value={currency}
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Grid xs={12} sm={10} md={8} lg={3} id="Grid2peopleScreen4">
            <Grid id="somegaponsubcat">
              <Box sx={{}}>
                <Typography id="FieldText">Primary Subcategory</Typography>
                <TextField
                  id="outlined-select-currency"
                  style={{ width: "100%" }}
                  size="small"
                  select
                  fullWidth
                  value={currency}
                  onChange={handleChange}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Grid id="textfieldsubcategoryss">
                  <Typography id="FieldText">Subcategory</Typography>
                  <TextField
                    id="outlined-select-currency"
                    style={{ width: "100%" }}
                    size="small"
                    select
                    fullWidth
                    value={currency}
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid> */}
        <Divider id="dividerafterpeopletypo2" />
        <Grid container id="TypOofStory3">
          <Grid xs={12} sm={12} md={12} lg={5}>
            <Typography id="Typoheadingofgrid2">Project Location</Typography>
            <Typography id="paraofstoryscreenz">
              Enter the location that best describes where your project is
              <br></br> based. <br></br>
              <br></br>
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={7} id="Grid2peopleScreen4">
            <Box
              sx={{
                width: "100%",
                maxWidth: "120%",
                borderRadius: "0%",
              }}
            >
              <Grid id="fullWidthxx">
                <TextField
                  required
                  style={{ width: "100%" }}
                  size="small"
                  id="outlined-required"
                  type="text"
                  placeholder="Start Typing your location"
                  value={websiteUrl}
                  onChange={(e) => {
                    setWebsiteUrl(e.target.value);
                  }}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Divider id="dividerafterpeopletypo2" />
        <Grid container id="TypOofStory3">
          <Grid xs={12} sm={10} md={8} lg={5}>
            <Typography id="Typoheadingofgrid2">Project image</Typography>
            <Typography id="paraofstoryscreenz">
              Add an image that clearly represents your project. Choose
              <br></br> one that looks good at different sizes—it’ll appear on
              your<br></br> project page, across the Kickstarter website and
              mobile <br></br>apps, and (when shared) on social channels.{" "}
              <br></br>
              <br></br>
              <br></br>
              Your image should be at least 1024x576 pixels. It will be
              <br></br> cropped to a 16:9 ratio
              <br></br>
              <br></br>
              Avoid images with banners, badges, or text—they are<br></br>{" "}
              illegible at smaller sizes, can be penalized by the Facebook
              <br></br> algorithm, and decrease your chances of getting
              Kickstarter<br></br> homepage and newsletter features.
            </Typography>
          </Grid>
          <Grid xs={10} sm={10} md={8} lg={7} id="Grid2peopleScreen4">
            <Box
              id="fullWidthx"
              sx={{
                width: "100%",
                maxWidth: "120%",
                borderRadius: "0%",
                border: "1px dashed ",
              }}
            >
              <Grid id="DropImageContainer">
                <Grid id="RoundBoxImage">
                  <InsertPhotoIcon id="insertphotoicon" />
                  <input
                    type="file"
                    id="input-file-upload"
                    value={projectImage}
                    onChange={(e: any) => {
                      setProjectImage(e.target.value);
                      formData.append("image", e.target.files[0]);
                    }}
                    style={{ opacity: 0 }}
                  />
                </Grid>

                <Grid id="TextTypeConatiner">
                  <Typography id="TextTypeImage">
                    Drop an image here, or select a file.
                  </Typography>
                  <Typography id="TextTypeImage">
                    It must be a JPG, PNG, GIF, TIFF, or BMP
                  </Typography>
                </Grid>
              </Grid>
              {/* <Grid id="GRIDoFlAST" container>
          <Grid xs={12} sm={6} md={6} lg={6} id="Buttonofbackinrewards"></Grid>
          <Grid xs={12} sm={6} md={6} lg={6} id="ButtonofStORYforSave">
            <Button
              onClick={updateFileName}
              variant="contained"
              type="submit"
              color="primary"
              id="ButtonofStORYforSave"
            >
              Save
            </Button>
          </Grid>
          <br></br>
        </Grid> */}
            </Box>
          </Grid>
        </Grid>
        <Divider id="dividerafterpeopletypo2" />
        <Grid container id="TypOofStory3">
          <Grid xs={12} sm={10} md={8} lg={5}>
            <Typography id="Typoheadingofgrid2">
              Project video (optional)
            </Typography>
            <Typography id="paraofstoryscreenz">
              Add a video that describes your project.
              <br></br>
              <br></br>
              Tell people what you’re raising funds to do, how you plan to
              <br></br> make it happen, who you are, and why you care about this
              <br></br> project.
              <br></br>
              <br></br>
              After you’ve uploaded your video, use our editor to add<br></br>{" "}
              captions and subtitles so your project is more accessible to
              <br></br> everyone.{" "}
            </Typography>
          </Grid>
          <Grid xs={10} sm={10} md={8} lg={7} id="Grid2peopleScreen4">
            <Box
              id="fullWidthx"
              sx={{
                width: "100%",
                maxWidth: "120%",
                borderRadius: "0%",
                border: "1px dashed ",
              }}
            >
              <Grid id="DropImageContainer">
                <Grid id="RoundBoxImage">
                  <VideoLibraryIcon id="insertphotoicon" />
                  <input
                    type="file"
                     accept="video/*"
                    id="input-file-upload"
                    value={video}
                    onChange={(e:any) => {
                      setVideo(e.target.value);
                      formData.append("image", e.target.files[0]);
                      
                    }}
                    style={{ opacity: 0 }}
                  />
                </Grid>

                <Grid id="TextTypeConatiner">
                  <Typography id="TextTypeImage">
                    Drop an image here, or select a file.
                  </Typography>
                  <Typography id="TextTypeImage">
                    It must be a MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV, no
                    larger than 5120 MB.
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Button color="success" id="buttonofstoryscreen4">
                <LocationOnIcon /> 80% of successful projects have a video. Make
                a great one, regardless of your budget. Learn more...
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider id="dividerafterpeopletypo2" />
        <Grid container id="TypOofStory3">
          <Grid xs={12} sm={10} md={8} lg={5}>
            <Typography id="Typoheadingofgrid2">
              Target launch date (optional)
            </Typography>
            <Typography id="paraofstoryscreenz">
              <br></br>
              We’ll provide you with recommendations on when to<br></br>{" "}
              complete steps that may take a few days to process. You can
              <br></br> edit this date up until the moment you launch your
              project,<br></br> which must always be done manually.
            </Typography>
          </Grid>
          <Grid xs={10} sm={9} md={8} lg={7} id="Grid2peopleScreen4">
            <Box
              sx={{
                width: "100%",
                maxWidth: "120%",
                borderRadius: "0%",
                border: "1px solid ",
              }}
            >
              <Grid id="ContainerSelectdate">
                <TextField
                  id="Selectdate"
                  value={targetLaunchDate}
                  onChange={(e) => {
                    setTargetLaunchDate(e.target.value);
                  }}
                  type="date"
                  variant="outlined"
                />
              </Grid>

              <Divider />
              <Typography id="dateTimeTopText">
                We'll recommend when you should:
              </Typography>
              <Typography id="dateTimePoint">
                <span>
                  <b>.</b>
                </span>{" "}
                Confirm your identity and provide payment details
              </Typography>
              <Typography id="dateTimePoint">
                <span>
                  <b>.</b>
                </span>{" "}
                Submit your project for review
              </Typography>
              <br></br>
            </Box>

            <Box>
              <Button color="success" id="buttonofstoryscreen4">
                <LocationOnIcon /> Setting a target date won’t automatically
                launch your project.
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider id="dividerafterpeopletypo2" />
        <Grid container id="TypOofStory3">
          <Grid xs={12} sm={10} md={8} lg={5} style={{ marginTop: "10px" }}>
            <Typography id="Typoheadingofgrid2">Campaign duration</Typography>
            <Typography id="paraofstoryscreenz">
              Set a time limit for your campaign. You won’t be able <br></br>
              to change this after you launch.
            </Typography>
          </Grid>
          <br></br>
          <Grid xs={12} sm={10} md={8} lg={7} id="Grid2peopleScreen4">
            <Box
              sx={{
                width: "100%",
                maxWidth: "120%",
                borderRadius: "0%",
              }}
            >
              <Grid id="fullWidthxx">
                <Grid id="fixedDays">
                  <Grid id="radioBtn">
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="Fixed number of days (1-60)"
                    />
                  </Grid>
                  <Divider />
                  <Grid id="FixedTextField">
                    <Typography id="FieldTextSmall">
                      Enter number of days
                    </Typography>
                    <TextField
                      style={{ width: "100%" }}
                      required
                      size="small"
                      id="outlined-required"
                      type="number"
                      placeholder="Fixed number of days (1-60)"
                      value={duration}
                      onChange={(e) => {
                        setDuration(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                width: 650,
                maxWidth: "120%",
                borderRadius: "0%",
              }}
            >
              <Grid id="textfieldsubcategoryss">
                <Grid id="fullWidthxx">
                  <Grid id="fullWidthxx">
                    <Grid id="fixedDays">
                      <Grid id="radioBtn">
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="End on a specific date & time"
                        />
                      </Grid>
                      <Divider />
                      <Grid id="FixedTextField">
                        <TextField
                          style={{ width: "50%" }}
                          required
                          size="small"
                          id="outlined-required"
                          type="date"
                          value={cDFixed}
                          onChange={(e) => {
                            setCDFixed(e.target.value);
                          }}
                        />
                        <p></p>

                        <TextField
                          style={{ width: "50%" }}
                          required
                          size="small"
                          id="outlined-required"
                          type="time"
                          placeholder="Fixed number of days (1-60)"
                          // value={cDFixed}
                          // onChange={(e) => {
                          //   setCDFixed(e.target.value);
                          // }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button color="success" id="buttonofstoryscreen4">
                <LocationOnIcon /> Campaigns that last 30 days or less are more
                likely to be successful. Learn more...
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid id="GRIDoFlAST" container>
          <Grid xs={12} sm={6} md={6} lg={6} id="Buttonofbackinrewards"></Grid>
          <Grid xs={12} sm={6} md={6} lg={6} id="ButtonofStORYforSave">
            <Button
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              color="primary"
              id="ButtonofStORYforSave"
            >
              Save
            </Button>
          </Grid>
          <br></br>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Basic;
