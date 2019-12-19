import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import StageEnd from "./StageEnd";
import NotFound from "./NotFound";

//If you're reading this then you probably aren't my sister who this site was designed for
//This is just a fun little site for my sister to do some painful tasks and then send me the password for me to give her a gift card for christmas once she has completed it
//If this somehow is my sister, how on earth did you know to look here?
export default () => {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/stage1" exact component={ Stage1 } />
      <Route path="/youAreNotGoingToGuessTheseURLsBTW" exact component={ Stage2 } />
      <Route path="/hoorayYouMadeItToTheFinalStageWellDone" exact component={ Stage3 } />
      <Route path="/betYouWishYouWroteThatDown" exact component={ Stage4 } />
      <Route path="/hereIsThePasswordYouFilthyAnimal" exact component={ StageEnd } />
      <Route component={ NotFound } />
    </Switch>
  )
}