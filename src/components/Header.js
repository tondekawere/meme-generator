import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

const HeaderWrapper = styled(AppBar)({
  background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
  padding: "10px 6%",
});

const HeaderTitle = styled(Typography)({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  fontSize: "24.75px",
  fontWeight: "bold",
  fontFamily: "Karla, sans-serif",
  letterSpacing: "-1px",
  
});

const Header = () => {
  return (
    <HeaderWrapper position="static">
      <Toolbar
        sx={{
          "@media (max-width: 569px)": {
            display: "grid",
            margin:"0 auto"
          },
        }}
      >
        <HeaderTitle variant="h6" style={{ fontWeight: "700" }}>
          <img
            src="/troll-face.png"
            alt="Troll Face"
            style={{ width: "30px", marginRight: "10px" }}
          />
          Meme Generator
        </HeaderTitle>
        <Typography variant="h6" style={{ fontFamily: "Karla, sans-serif" }}>
          React Course - Project 3
        </Typography>
      </Toolbar>
    </HeaderWrapper>
  );
};

export default Header;
