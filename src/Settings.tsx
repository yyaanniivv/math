import React, { Dispatch, SetStateAction, useState } from "react";
import { Collapse, IconButton } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";
import { Action, IConfig } from "./common";

import "./Settings.css";
import clsx from "clsx";

interface Props {
  action: Action;
  config: IConfig;
  setConfig: Dispatch<SetStateAction<IConfig>>;
  setAction: Dispatch<SetStateAction<Action>>;
}

function Settings({ action, config, setConfig, setAction }: Props) {
  let [toggle, setToggle] = useState<boolean>(false);

  const onActionChange = (action: Action) => {
    setAction(action);
  };

  const onNumberChange = (name: string) => (_: any, values: Array<number> | number) => {
    const offset = (values as Array<number>)[0];
    let range = (values as Array<number>)[1];
    range = range - offset + 1;

    switch (name) {
      case "aValues":
        setConfig({ ...config, aOffset: offset, aRange: range });
        break;
      case "bValues":
        setConfig({ ...config, bOffset: offset, bRange: range });
        break;
      default:
        console.log("error in switch case");
    }
  };

  return (
    <div className="settings">
      <Collapse in={toggle}>
        <div>
          <div>
            <label htmlFor="action">Select Action</label>
            <select id="action" value={action} onChange={(e) => onActionChange(e.target.value as Action)}>
              <option value="+">חיבור</option>
              <option value="-">חיסור</option>
              <option value="x">כפל</option>
              <option value=":" hidden>חילוק</option>
            </select>
          </div>

          <div className="input-group">
            <Slider
              value={[config["aOffset"], config["aOffset"] + config["aRange"] - 1]}
              onChange={onNumberChange("aValues")}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              step={5}
              min={0}
              max={200}
            />
            a = {config["aOffset"]} - {config["aOffset"] + config["aRange"] - 1}
          </div>
          <div className="input-group">
            <Slider
              value={[config["bOffset"], config["bOffset"] + config["bRange"] - 1]}
              onChange={onNumberChange("bValues")}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              min={0}
              max={25}
            />
            b = {config["bOffset"]} - {config["bOffset"] + config["bRange"] - 1}
          </div>
        </div>
      </Collapse>
      <div className="settings-title">
        <IconButton
          onClick={() => setToggle(!toggle)}
          className={clsx("expand", {
            expandOpen: toggle,
          })}
        >
          <ExpandMoreIcon color="primary" />
        </IconButton>
        <p>הגדרות</p>
      </div>
    </div>
  );
}

export default Settings;
