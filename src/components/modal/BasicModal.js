import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './BasicModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleColorClick = (color) => {
    switch (color) {
      case 'green':
        setStatus('available');
        break;
      case 'red':
        setStatus('unavailable');
        break;
      case 'black':
        setStatus('equipped');
        break;
      default:
        setStatus('');
        break;
    }
  };

  return (
    <div>
      <Button className="buttontraining33" onClick={handleOpen}>
        Status
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Modal Content
          </Typography>
          <div className="color-word">
            <div className="color-circle green" onClick={() => handleColorClick('green')}></div>
            <div className="color-circle red" onClick={() => handleColorClick('red')}></div>
            <div className="color-circle black" onClick={() => handleColorClick('black')}></div>
          </div>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {status === 'available' && 'Available'}
            {status === 'unavailable' && 'Unavailable'}
            {status === 'equipped' && 'Equipped'}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;