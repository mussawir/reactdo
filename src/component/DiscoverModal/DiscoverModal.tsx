import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../DiscoverModal/DiscoverModelStyle.css'
import Discover from '../Discover/Discover';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  
};

const DiscoverModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button id="discoverBtn" onClick={handleOpen}>Discover</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box id="modalStyle">
            <Button id="modalCloseBtn" onClick={handleClose}>
              <CloseIcon/>
            </Button>
            <br/>
            <br/>
           
         <Discover/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default DiscoverModal;