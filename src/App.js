import React, { useState, useEffect } from "react";
import { Container, Snackbar } from "@material-ui/core";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import { TWEETS_STORAGE } from "./utils/constants";

//Componente padre de la aplicación
function App() {
  //Estado para manipular el toast
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  });

  const { open, text } = toastProps;

  //Estado para manipular los tweets
  const [allTweets, setAllTweets] = useState([]);

  //Estado para renderizar la página
  const [reloadTweets, setReloadTweets] = useState(false);

  //Obtiene todos los tweets de localStorage
  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  //Elimina el Tweet seleccionado
  const deleteTweet = index => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  //Cerrar la notificación
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastProps({
      open: false
    });
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        autoHideDuration={3000}
        message={<span id="message-id">{text}</span>}
        onClose={handleClose}
      />
    </Container>
  );
}

export default App;
