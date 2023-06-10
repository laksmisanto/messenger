import { Backdrop, Box, Fade, Modal } from "@mui/material";
import "./style.css";
import Uploadprofilephoto from "../uploadprofile";

const Modals = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="modal__box">
            <Uploadprofilephoto />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Modals;
