/** @format */

// import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Paper } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Home.module.css";
import EXAppBar from "./EXAppBar";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Textarea from "./tabtext.js"
import Text from "./text.js";
import Tarea from "./home.js";
import React, { useState } from "react";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default function Home() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>exparty-sample</title>
        <meta name="description" content="sample for exparty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EXAppBar></EXAppBar>
        <div>aaaaaaa</div>
        <Container>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrow={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#FFB8B8",
              }}
            >
              <h2>1ページ目</h2>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#B8FFB8",
              }}
            >
              <h2>2ページ目</h2>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#B8D7FF",
              }}
            >
              <h2>3ページ目</h2>
            </Paper>
          </Carousel>
        </Container>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} sx={{ width: "50vw" }} />
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
        <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          
        </TabPanel>
        {/* <Text></Text> */}
      </main>

{/* function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  ); */}
      

      

      {/* <footer className={styles.footer}>
        <div>Copyright © 2021 iwa. All Rights Reserved.</div>
      </footer> */}
    </div>
  );

}
