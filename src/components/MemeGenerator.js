import React, { useState } from "react";
import { Container, TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const MemeImageWrapper = styled(Box)({
  position: "relative",
  textAlign: "center",
  marginTop: "20px",
  display: "none",
});

const MemeImage = styled("img")({
  width: "100%",
  height: "auto",
});

const MemeText = styled("div")(({ position }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#FFF",
  fontSize: "2rem",
  fontWeight: "bold",
  textShadow: "2px 2px 4px #000",
  width: "80%", 
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  top: position === "top" ? "10px" : "unset",
  bottom: position === "bottom" ? "10px" : "unset",
}));

const InputWrapper = styled(Box)({
  display: "grid",
  gap: "10px",
  marginTop:"5%",
  marginBottom: "20px",
  "@media (min-width: 600px)": {
    display: "flex",
    justifyContent: "space-between",
  },
});

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [generatedTopText, setGeneratedTopText] = useState("");
  const [generatedBottomText, setGeneratedBottomText] = useState("");
  const [memeImage] = useState("/memeimg.png"); 
  const [showMeme, setShowMeme] = useState(false);

  const generateMeme = () => {
    setGeneratedTopText(topText);
    setGeneratedBottomText(bottomText);
    setShowMeme(true);
  };

  return (
    <Container>
      <InputWrapper>
        <TextField
          label="Top Text"
          variant="outlined"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          fullWidth
          sx={{ fontSize: "12px" }}
        />
        <TextField
          label="Bottom Text"
          variant="outlined"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          fullWidth
          sx={{ fontSize: "12px" }}
        />
      </InputWrapper>
      <Button
        variant="contained"
        color="primary"
        onClick={generateMeme}
        fullWidth
        style={{
          background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
          textTransform: "none",
          fontWeight: "700",
          fontFamily: "Karla, sans-serif",fontSize:"18px", letterSpacing:"-1px",
        }}
      >
        Get a new meme image 🖼
      </Button>
      {showMeme && (
        <MemeImageWrapper style={{ display: "block" }}>
          <MemeImage src={memeImage} alt="Generated Meme" />
          <MemeText position="top">{generatedTopText}</MemeText>
          <MemeText position="bottom">{generatedBottomText}</MemeText>
        </MemeImageWrapper>
      )}
    </Container>
  );
};

export default MemeGenerator;
