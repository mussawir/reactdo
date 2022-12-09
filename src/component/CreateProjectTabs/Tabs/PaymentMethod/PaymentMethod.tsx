import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import "../PaymentMethod/PaymentMethod.css"
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type Props = {}

const PaymentMethod = (props: Props) => {
    return (
        <Grid>
            <Grid>
                <Typography id="firstheadingofpaymentscreen">
                    Verify your details and link a bank account
                </Typography>
                <Typography id="firstparaofpaymentscreen">
                    Confirm who’s raising funds and receiving them if this project reaches its funding goal. Double-check your<br></br> information—you agree the details you provide are true and acknowledge they can’t be changed once <br></br>submitted.
                </Typography>
                <Divider />
            </Grid>
            <Grid id="mainGridofPayment" columns={12}>
                <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography>Contact email</Typography>
                    <Typography id="para2ofpayment">Confirm the email address we should use for <br></br>correspondence about this project.</Typography>
                    <Typography id="para2ofpayment">If the incorrect email is shown here, update it on<br></br> your account.</Typography>
                </Grid>

                <Grid xs={8} sm={8} md={6} lg={6} id="Grid2peopleScreen4">

                    <Box
                        sx={{
                            width: 530,
                            maxWidth: '100%',
                            borderRadius: '0%',
                            marginLeft: '36%',
                            padding: '10px',
                            backgroundColor: '#FBFBFA'

                        }}
                    >
                        <TextField fullWidth label="Email..." id="fullWidth" />
                        <Button id="buttoonssofpayment" variant='contained'>
                            send Verification email
                        </Button>
                    </Box>

                </Grid>

            </Grid>
            <Divider />
            <Grid id="mainGridofPayment" columns={12}>
                <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography>Project type</Typography>
                    <Typography id="para2ofpayment">Select “Individual” if you’re raising and receiving funds for<br></br> this project in your own name. Select “Business” or <br></br>“Nonprofit” if you’re raising and receiving funds for this<br></br> project on behalf of an entity that you own or are an<br></br> executive of, with authorization to represent.</Typography>
                    <Typography id="para2ofpayment">Learn more about tax considerations when running your<br></br> project.</Typography>
                </Grid>

                <Grid xs={12} sm={10} md={8} lg={6} id="Grid2peopleScreen4">


                    <Box
                        sx={{
                            width: 530,
                            maxWidth: '80.5%',
                            borderRadius: '0%',
                            marginLeft: '28%',
                            border: '1px solid grey',
                            padding: '20px',
                            backgroundColor: '#FBFBFA'

                        }}
                    >
                        <Typography><LockIcon /></Typography>
                        <Typography id="TypooFpeopleS4">Complete the above steps to unlock this section</Typography>

                    </Box>

                </Grid>
            </Grid>
            <Divider />
            <Grid id="mainGridofPayment" columns={12}>
                <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography>Project verification</Typography>
                    <Typography id="para2ofpayment">You’ll be redirected to Stripe, our payment processor, to<br></br> provide your age, location, tax information, and other details.<br></br> Projects raising funds for a business or nonprofit will require<br></br> similar information, along with details about the entity’s<br></br> owners and directors.</Typography>
                    <Typography id="para2ofpayment">By proceeding, you certify that the details you provide are <br></br>true.</Typography>
                </Grid>

                <Grid xs={12} sm={10} md={8} lg={6} id="Grid2peopleScreen4">


                    <Box
                        sx={{
                            width: 530,
                            maxWidth: '80%',
                            borderRadius: '0%',
                            marginLeft: '25%',
                            border: '1px solid grey',
                            padding: '20px',
                            backgroundColor: '#FBFBFA'

                        }}
                    >
                        <Typography><LockIcon /></Typography>
                        <Typography id="TypooFpeopleS4">Complete the above steps to unlock this section</Typography>

                    </Box>

                </Grid>
            </Grid>
            <Divider />
            <Grid id="mainGridofPayment" columns={12}>
                <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography>Bank account</Typography>
                    <Typography id="para2ofpayment">Add the checking account where you want to receive funds.<br></br> This account must be located in Canada, and able to receive<br></br> direct deposits in the currency in which you raise funds. We<br></br> don’t support wire transfers, savings accounts, or virtual<br></br> bank accounts.</Typography>
                    <Typography id="para2ofpayment">You represent you're authorized to link this bank account to<br></br> this project. If you’re raising funds as an individual, the<br></br> account is registered in your name. If it’s on behalf of a<br></br> business or nonprofit, the account is registered in the name<br></br> of that entity.</Typography>
                    <Typography id="para2ofpayment">Make sure all your details are correct—you can’t change<br></br> them after you submit your project for review. Kickstarter<br></br> isn’t responsible for lost bank transfers as a result of<br></br> incorrect or unsupported bank credentials or accounts.</Typography>
                </Grid>

                <Grid xs={12} sm={10} md={8} lg={6} id="Grid2peopleScreen4">

                    <Box
                        sx={{
                            width: 530,
                            maxWidth: '80%',
                            borderRadius: '0%',
                            marginLeft: '27%',
                            border: '1px solid grey',
                            padding: '20px',
                            backgroundColor: '#FBFBFA'

                        }}
                    >
                        <Typography><LockIcon /></Typography>
                        <Typography id="TypooFpeopleS4">Complete the above steps to unlock this section</Typography>

                    </Box>

                </Grid>
            </Grid>
            <Divider />
            <Grid id="mainGridofPayment" columns={12}>
                <Grid xs={12} sm={10} md={8} lg={6}>
                    <Typography>Payment source</Typography>
                    <Typography id="para2ofpayment">Add a Visa, Mastercard, or American Express credit or debit<br></br> card. Discover, JCB, Maestro, and Visa Electron cards <br></br> are not accepted. This account must be located in Canada, and <br></br>able to receive direct deposits in the currency in which you raise<br></br> funds. We don’t support wire transfers, savings accounts, or virtual<br></br> bank accounts.</Typography>
                    <Typography id="para2ofpayment">This card must be registered to the individual or<br></br> entity (or entity’s owner) raising funds for this project, and in <br></br>their name.</Typography>
                    <Typography id="para2ofpayment">By adding this card, you agree Kickstarter may charge it for<br></br> refunds, or in the event of lost chargeback disputes for<br></br> your project.</Typography>
                </Grid>

                <Grid xs={12} sm={10} md={8} lg={6} id="Grid2peopleScreen4">

                    <Box
                        sx={{
                            width: 530,
                            maxWidth: '80%',
                            borderRadius: '0%',
                            marginLeft: '20%',
                            border: '1px solid grey',
                            padding: '20px',
                            backgroundColor: '#FBFBFA'

                        }}
                    >
                        <Typography><LockIcon /></Typography>
                        <Typography id="TypooFpeopleS4">Complete the above steps to unlock this section</Typography>

                    </Box>

                </Grid>
            </Grid>
            <Grid id="mainLastPeopleid">
                <Grid id="GRIDoFlAST" container>
                    <Grid xs={12} sm={10} md={8} lg={6} id="Buttonofbackinrewards">
                        <Button id="Buttonofbackinrewards" className='thorakhiskobackbutton'><ArrowBackIosIcon className='thorakhiskobackbutton' id="Buttonofbackinrewards" />Back to story</Button>
                    </Grid>
                    <Grid xs={12} sm={10} md={8} lg={6} id="ButtonofStORYforSave" className="sjdncjc">
                        <Typography id="hdwswx2">No unsaved Changes</Typography>
                        <Button variant="contained" color="primary" id="ButtonofStORYforSavex2">Next: Payment</Button>
                    </Grid >
                    <br></br>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PaymentMethod;