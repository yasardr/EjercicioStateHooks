import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Tweet from "../Tweet";

import "./ListTweets.scss";

//Componente que contendra la lista de Tweets
const ListTWeets = ({ allTweets, deleteTweet }) => {
  //En caso de no existir tweets
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay Tweets...</h2>
      </div>
    );
  }

  //Mostrar todos los Tweets cuando existan
  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item md={4} sm={6} xs={12}>
          <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid>
      ))}
    </Grid>
  );
};

ListTWeets.propTypes = {
  allTweets: PropTypes.array.isRequired,
  deleteTweet: PropTypes.func.isRequired
};

export default ListTWeets;
