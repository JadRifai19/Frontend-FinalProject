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

const BasicModal = ({ color, day, time, handleClick }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleColorClick = (color) => {
    setStatus(status === color ? '' : color);
  };

  const handleSessionClick = () => {
    handleClick(day, time);
    handleClose();
  };

  let word = '';
  let wordColor = '';

  if (status === 'available') {
    word = 'Available';
    wordColor = 'green';
  } else if (status === 'equipped') {
    word = 'Equipped';
    wordColor = 'blue';
  } else if (status === 'unavailable') {
    word = 'Unavailable';
    wordColor = 'red';
  }

  return (
    <div>
      <Button className={`buttontraining33 ${color}`} onClick={handleOpen}>
        &nbsp;
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
            <div
              className={`color-circle green ${status === 'available' ? 'selected' : ''}`}
              onClick={() => handleColorClick('available')}
            ></div>
            <div
              className={`color-circle red ${status === 'unavailable' ? 'selected' : ''}`}
              onClick={() => handleColorClick('unavailable')}
            ></div>
            <div
              className={`color-circle blue ${status === 'equipped' ? 'selected' : ''}`}
              onClick={() => handleColorClick('equipped')}
            ></div>
          </div>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <div className={`color-circle ${wordColor}`} />
            {word}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
