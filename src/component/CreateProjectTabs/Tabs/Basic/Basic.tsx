import React, { useEffect } from "react";
import axios from "axios";
import "../Basic/Basic.css";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuItem from "@mui/material/MenuItem";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

type Props = {};

const currencies = [
  {
    value: "USD",
    label: "Select",
  },
  {
    value: "EUR",
    label: "Select",
  },
  {
    value: "BTC",
    label: "Select",
  },
  {
    value: "JPY",
    label: "Select",
  },
];

const Basic = (props: Props) => {
  const [title, settitle] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(title);

    axios
      .post("http://localhost:5000/project", { title })

      .then((res) => {
        console.log(res, "Result");
        console.log("DataDataDataDataData", res.data);
        console.log("DataDataDataDataData", res.data?.projectId);
      })
      .catch((err) => {
        console.log(err, "error");
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
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid xs={12} sm={10} md={8} lg={6}>
            <Typography id="PeopleScreensTypo1">
              Start your new project
            </Typography>
            <Typography id="PeopleScreensTypo2">
              Make it easy for people to learn about your project.
            </Typography>
          </Grid>
          <Divider id="dividerafterpeopletypo2" />
          <Grid container id="TypOofStory3">
            <Grid xs={12} sm={10} md={8} lg={5}>
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
            <Grid xs={12} sm={10} md={8} lg={7} id="Grid2peopleScreen4">
              <Box
                sx={{
                  width: 650,
                  maxWidth: "120%",
                  borderRadius: "0%",
                }}
              >
                {/* <Typography id="anyt">Title</Typography> */}
                <Grid id="fullWidthxx">
                  <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => {
                      settitle(e.target.value);
                    }}
                  />
                  {/* <Button id="Create-btn" variant="contained" type="submit">
                Create account
              </Button> */}
                </Grid>
              </Box>

              <br></br>
              <br></br>
              <Box
                sx={{
                  width: 650,
                  maxWidth: "120%",
                  borderRadius: "0%",
                }}
              >
                <Typography id="anyt">Subtitle</Typography>
                <Grid id="fullWidthxx">
                  <TextField
                    fullWidth
                    placeholder="Gently brings awareness to self-care activities, using encouraging push notifications, rather than guilt or shame."
                    id="fullWidth"
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
          <Grid container id="TypOofStory3">
            <Grid xs={12} sm={10} md={8} lg={5}>
              <Typography id="Typoheadingofgrid2">Project category</Typography>
              <Typography id="paraofstoryscreenz">
                Choose a primary category and subcategory to help backers
                <br></br> find your project.
                <br></br>
                <br></br>
                Your second subcategory will help us provide more relevant
                <br></br> guidance for your project. It won’t display on your
                project<br></br> page or affect how it appears in search
                results.<br></br>
                <br></br>
                You can change these anytime before and during your<br></br>{" "}
                campaign.
              </Typography>
            </Grid>
            <Grid xs={12} sm={10} md={8} lg={3} id="Grid2peopleScreen4">
              <Grid id="somegaponsubcat">
                <Box sx={{}}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    label="Primary category"
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
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Category"
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
                  <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    label="Primary Subcategory"
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
                    <TextField
                      id="outlined-select-currency"
                      select
                      fullWidth
                      label="Subcategory"
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
          </Grid>
          <Divider id="dividerafterpeopletypo2" />
          <Grid container id="TypOofStory3">
            <Grid xs={12} sm={10} md={8} lg={5}>
              <Typography id="Typoheadingofgrid2">Project Location</Typography>
              <Typography id="paraofstoryscreenz">
                Enter the location that best describes where your project is
                <br></br> based. <br></br>
                <br></br>
              </Typography>
            </Grid>
            <Grid xs={12} sm={10} md={8} lg={7} id="Grid2peopleScreen4">
              <Box
                sx={{
                  width: 650,
                  maxWidth: "120%",
                  borderRadius: "0%",
                }}
              >
                <Grid id="fullWidthxx">
                  <TextField
                    fullWidth
                    placeholder="Start Typing your location "
                    id="fullWidth"
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
                  width: 650,
                  maxWidth: "120%",
                  borderRadius: "0%",
                  border: "1px dashed ",
                }}
              >
                <InsertPhotoIcon id="insertphotoicon" />
                <Typography id="typoaftarinsert">
                  Drop an image here, or select a file.
                </Typography>
                <Typography id="typoaftarinsert2">
                  It must be a JPG, PNG, GIF, TIFF, or BMP, no larger than 200
                  MB.
                </Typography>
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
                <br></br> make it happen, who you are, and why you care about
                this<br></br> project.
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
                  width: 650,
                  maxWidth: "120%",
                  borderRadius: "0%",
                  border: "1px dashed ",
                }}
              >
                <VideoLibraryIcon id="insertphotoicon" />
                <Typography id="typoaftarinsert">
                  Drop a video here, or select a file.
                </Typography>
                <Typography id="typoaftarinsert2">
                  It must be a MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV, no larger
                  than 5120 MB.
                </Typography>
              </Box>
              <Box>
                <Button color="success" id="buttonofstoryscreen4">
                  <LocationOnIcon /> 80% of successful projects have a video.
                  Make a great one, regardless of your budget. Learn more...
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
                  width: 650,
                  maxWidth: "120%",
                  borderRadius: "0%",
                  border: "1px solid ",
                }}
              >
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                  id="togglebuttonGroup"
                >
                  <ToggleButton value="bold" aria-label="bold">
                    <Typography>DD</Typography>
                  </ToggleButton>
                  <ToggleButton value="italic" aria-label="italic">
                    <Typography>MM</Typography>
                  </ToggleButton>
                  <ToggleButton value="underlined" aria-label="underlined">
                    <Typography>YYY</Typography>
                  </ToggleButton>
                  <ToggleButton value="color" aria-label="color">
                    <CalendarMonthIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
                <Divider />
                <Typography id="kskjcksjc">
                  We'll recommend when you should:
                </Typography>
                <Typography id="kskjcksjc">
                  Confirm your identity and provide payment details
                </Typography>
                <Typography id="kskjcksjc">
                  {" "}
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
            <Grid xs={12} sm={10} md={8} lg={5}>
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
                  width: 650,
                  maxWidth: "120%",
                  borderRadius: "0%",
                }}
              >
                <Grid id="fullWidthxx">
                  <TextField
                    fullWidth
                    placeholder="Fixed number of days (1-60)"
                    id="fullWidth"
                  />
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
                    <TextField
                      fullWidth
                      placeholder="End a specific date & time"
                      id="fullWidth"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Button color="success" id="buttonofstoryscreen4">
                  <LocationOnIcon /> Campaigns that last 30 days or less are
                  more likely to be successful. Learn more...
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid id="GRIDoFlAST" container>
            <Grid xs={12} sm={10} md={8} lg={6} id="Buttonofbackinrewards">
              <Button id="Buttonofbackinrewards">
                <ArrowBackIosIcon id="Buttonofbackinrewards" />
                Back to Basic
              </Button>
            </Grid>
            <Grid xs={12} sm={10} md={8} lg={6} id="ButtonofStORYforSave">
              <Button
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
      </form>
    </>
  );
};

export default Basic;
