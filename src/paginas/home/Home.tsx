import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import "./Home.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokenReducer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    state => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts" className="text-decorator-none">
              <Button variant="outlined" className="botao">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/H88yIo2.png"
            alt=""
            width="500px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
{
  /*<Paper>
    <Box p={2}>
        <Box display="flex" justifyContent="center">
            <h1>Titulo</h1>
          </Box>
          <img
            src="https://64.media.tumblr.com/7524655cbb15562a2144450394759fa5/f09abb0f6bcba2f6-4d/s540x810/f1aa4a1cfc34178a7933521ce336ad1d62039822.gif"
            alt="Foto de poder"
            style={{width: "90%", height: "90%"}}
    />
        <Box display="flex" justifyContent="center" p={2}>
            <Button variant="contained" color="primary">
              {" "}
              texto 1
            </Button>

            <Button variant="contained" color="secondary">
              {" "}
              texto 2
            </Button>
        </Box>
    </Box>
</Paper> */
}

{
  /* <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Paper style={{ height: "100vh", background: "lightgrey" }}></Paper>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4} spacing={2}>
          <Grid item>
            <Paper style={{ height: "49vh", background: "red" }}></Paper>
          </Grid>
          <Grid item>
            <Paper style={{ height: "49vh", background: "green" }}></Paper>
          </Grid>
        </Grid>
      </Grid> */
}
