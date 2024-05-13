"use client";
import { Modal } from "@mui/material";
import Button from "./Button";
import IconButton from "./IconButton";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 1200,
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  mx: 4,
  color: "black",
};

export default function LuckyRoulette() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("click");
    setOpen(true);
  };
  const handleClose = () => {
    console.log("click");
    setOpen(false);
  };

  return (
    <>
      <section className="w-full flex justify-center items-center">
        <Button text="Sortear"></Button>
        <IconButton click={handleOpen}></IconButton>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-3xl fontFamily">Configurar</div>

          <div>
            <div className="sec1"></div>
            <div className="divider"></div>
            <div className="sec2"></div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
