import "./index.css";
import confete from "../../Imagens/confete.svg";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalContato(props) {
  return (
    <div>
      <Modal
        open={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src={confete} />
            Obrigado por nos contatar!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Em breve retornaremos seu contato!
          </Typography>
          <br />
          <Button onClick={props.handleClose}>Fechar</Button>
        </Box>
      </Modal>
    </div>
  );
}
