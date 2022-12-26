import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../FAQ/FaqStyle.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Cards } from './FaqCard/Cards';



export const Faq = () => {
    return (
        <>
        <Box>
            <Grid id='Main'>
                <Grid xs={12} sm={12} md={6}>
                    <Typography id='Faq'> Frequently Asked Questions </Typography>
                    </Grid>
                    <Grid id='main-text'>
                    <Grid xs={12} sm={12} md={8} lg={4}>
                        <Accordion id='textt'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='Faq-text'>What are general customer service hours?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    During and after the campaign is over you may have questions about your order or there may be an issue. Though someone will try to respond to you as quickly as possible and you may even get a response during "off" hours, our official business hours are Monday through Friday, 9am to 5pm PST.

                                    Please keep in mind that if you message on a Friday afternoon, you might not receive a reply until Monday, and that any messages sent over the weekend might not be seen until Monday later in the day as we sort through them.

                                    Additionally, we can not provide customer service over social media for many reasons, most importantly for security. Only direct questions to us via Kickstarter through a message so that we can look up your account and order.
                                </Typography>
                                <Typography id='L'>Last updated: Thu, December 15 2022 1:39 AM UTC +05:30</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id='textt'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='Faq-text'>How official are the estimated delivery dates for each reward?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The delivery dates associated with each reward are based on our anticipated production schedule. They are not guaranteed and, as they are described, are estimates. Once we finish surveys and all add ons are locked we go into production on those items and will provide campaign updates throughout the process.
                                </Typography>
                                <Typography id='L'>Last updated: Thu, December 15 2022 1:39 AM UTC +05:30</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id='textt'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='Faq-text'>How much will shipping be for US and International backers?</Typography>
                                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Please note that shipping costs are NOT included in your pledge and you will pay actual shipping during the BackerKit survey phase. The fulfillment company is based in Portland, Oregon USA so shipping will vary depending on weight, size, and in the case of international orders, region.

                                    With that said, we can provide some preliminary ESTIMATES. Issues with the USPS can impact issues with the Royal Mail, Canadian Mail, and so on, as can the constantly changing rules in the EU. Fluxes around holiday seasons can also change these estimates.

                                    The Omnibus and slipcase are coming in at 6lbs total, so all orders will start at the "Up to 7lbs" range featured in the shipping table on the campaign page in the “Shipping Section”. Also, note that pricing and regions have been updated from past Legendary Comics Kickstarter campaigns, so please review.

                                    Backers are responsible for any VAT, import duties, taxes or other fees and are not included in shipping. We recommend inquiring with your country's customs office to determine whether there will be additional fees.

                                    NOTE: Prices are subject to change. Weight in US pounds (LBS). Orders beyond 12lbs will have higher shipping fees.
                                </Typography>
                                <Typography id='L'>Last updated: Thu, December 15 2022 1:39 AM UTC +05:30</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id='textt'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='Faq-text'>Refund Policy</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Campaign pledges once processed are final and non-refundable. In extreme circumstances, we can offer a refund at our sole discretion. In no circumstances are the percentages taken by Kickstarter, Stripe, and Backerkit (or other 3rd party fulfillment software we use) refundable once credit cards have been processed by Kickstarter when the campaign ends.
                                </Typography>
                                <Typography id='L'>Last updated: Thu, December 15 2022 1:39 AM UTC +05:30</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id='textt'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='Faq-text'>Will this book be released in retail?</Typography>
                                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The Monsterverse Omnibus will be available in retail, BUT this Kickstarter is offering an exclusive cover and a deluxe omnibus slipcase that WILL NOT be available anywhere but here.
                                </Typography>
                                <Typography id='L'>Last updated: Thu, December 15 2022 1:39 AM UTC +05:30</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id='textt'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='Faq-text'>How do I fill out and add on items in my BackerKit survey?</Typography>
                                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You will be sent a BackerKit survey via your email address roughly 2 weeks after the Kickstarter concludes. It is in the survey where you can add additional items to your order and will provide your shipping address and where you will be charged for shipping. You must complete your survey or your order will not be shipped.
                                </Typography>
                                <Typography id='L'>Last updated: Thu, December 15 2022 1:39 AM UTC +05:30</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id='textt'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='Faq-text'>What items will be available as add ons in the BackerKit survey?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Outside of the items listed in the Add Ons section, and additional copies of the Omnibus, there are no plans for breaking out individual non-book items from the reward tiers due to the logistical complications it creates during fulfillment.

                                    Occasionally, we might discover that the minimum quantity we need to produce an item creates some overstock and in those cases, we would potentially make them available individually, but backers should assume that the items as broken out in the reward tiers and add ons are what's available. Additional copies of the Omnibus will be available as add ons in the BackerKit surveys and not during the Kickstarter campaign.
                                </Typography>
                                <Typography id='L'>Last updated: Thu, December 15 2022 1:39 AM UTC +05:30</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Divider orientation="vertical" id='divider' flexItem ></Divider>
                    <Grid id='side-btn' xs={12} md={2}>
                        <Typography id='Desc-btn'>Don't see the answer to your question? Ask <br></br>  the project creator directly.</Typography>
                        <Stack id='btn-ask'>
                            <Button variant="contained" id='btn'>
                                Ask a question
                            </Button>
                        </Stack>
                    </Grid>
                    </Grid>
            </Grid>
            <Divider />
        </Box>

        <Cards/>

        </>
    );
}