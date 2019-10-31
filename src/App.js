import React from "react";
import "./App.css";
import { List, ListItem, Button } from "@material-ui/core";
import bb8 from "./assets/bb8.m4r";
import beepbeep from "./assets/beepbeep.m4r";
import beobeo from "./assets/beobeo.m4r";
import bohbubobo from "./assets/bohbubobo.m4r";
import hehe from "./assets/hehe.m4f";
import heheheho from "./assets/heheheho.m4r";
import uhoh from "./assets/uhoh.m4r";

function App() {
  return (
    <div className="App">
      <div className="container">
        <List>
          {[
            { value: "default", path: bb8 },
            { value: "beepbeep", path: beepbeep },
            { value: "beobeo", path: beobeo },
            { value: "bohbubobo", path: bohbubobo },
            { value: "hehe", path: hehe },
            { value: "heheheho", path: heheheho },
            { value: "uhoh", path: uhoh }
          ].map(option => {
            const ref = React.createRef();
            return (
              <ListItem key={option.value}>
                <audio src={option.path} ref={ref} preload="auto" />
                <Button onClick={() => ref.current.play()}>
                  {option.value}
                </Button>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
