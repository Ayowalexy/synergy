import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { colors } from "../../styles/colors";

interface Props {
  children: JSX.Element;
  width: string;
  top: string;
  left: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rounded?: string;
}

export default function BasicModal({
  width,
  children,
  top,
  left,
  open,
  setOpen,
  rounded,
}: Props) {
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: top,
            left: left,
            transform: "translate(-50%, -50%)",
            width: width,
            bgcolor: colors.darkGreen2,
            // border: "2px solid #000",
            borderRadius: rounded || "16px",

            boxShadow: 24,
            // p: 4,
            outline: 0,
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
}
