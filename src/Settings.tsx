import React, { Dispatch, SetStateAction, useState } from "react";
import Slider from "@material-ui/core/Slider";
import { IConfig, ISettingNumberChange } from "./common";

import "./Settings.css";

interface Props {
  config: IConfig;
  setConfig: Dispatch<SetStateAction<IConfig>>;
}

function Settings({ config, setConfig }: Props) {
  let [toggle, setToggle] = useState<boolean>(false);

  const onNumberChange = (name: string) => (_: any, values: Array<number> | number) => {
    const offset = (values as Array<number>)[0];
    let range = (values as Array<number>)[1];

    range = range - offset + 1;
    onConfigChange(name, { offset, range });
  };

  const onConfigChange = (id: string, { offset, range }: ISettingNumberChange) => {
    switch (id) {
      case "aValues":
        setConfig({ ...config, aOffset: offset, aRange: range });
        break;
      case "bValues":
        setConfig({ ...config, bOffset: offset, bRange: range });
        break;
      default:
        console.log("error in switch case");
    }
    // if (id === "action") {
    //   setConfig({ ...config, [id]: value });
    // } else {
    //   setConfig({ ...config, [id]: parseInt(value) });
    // }
  };

  return (
    <div>
      <div onClick={() => setToggle(!toggle)}>{toggle ? "סגור הגדרות ^" : "פתח הגדרות V"}</div>
      {toggle && (
        <div className="settings">
          <div>
            <label htmlFor="action">Select Action</label>
            <select id="action" disabled>
              <option value="x">כפל</option>
              <option value="+">חיבור</option>
              <option value="-">חיסור</option>
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
      )}
    </div>
  );
}

export default Settings;
