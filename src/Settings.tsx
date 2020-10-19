import React, { Dispatch, SetStateAction, useState } from "react";
import Slider from "@material-ui/core/Slider";
import { IConfig } from "./common";

import "./Settings.css";

interface Props {
  config: IConfig;
  setConfig: Dispatch<SetStateAction<IConfig>>;
}

function Settings({ config, setConfig }: Props) {
  let [toggle, setToggle] = useState<boolean>(false);

  const onTestChange = (name: string) => (_: any, values: Array<number> | number) =>
    onConfigChange(name, values);

  const onConfigChange = (id: string, values: Array<number> | number) => {
    let offset, range;
    switch (id) {
      case "aValues":
        offset = (values as Array<number>)[0];
        range = (values as Array<number>)[1];
        console.log("a");

        range = range - offset + 1;
        setConfig({ ...config, aOffset: offset, aRange: range });
        break;
      // case "bValues":
      //   console.log("B");

      // offset = (values as Array<number>)[0];
      // range = (values as Array<number>)[1];

      //   range = range - offset + 1;
      //   setConfig({ ...config, bOffset: offset, bRange: range });
      //   break;
      default:
        console.log("error in switch case");
    }
    // if (id === "action") {
    //   setConfig({ ...config, [id]: value });
    // } else {
    //   setConfig({ ...config, [id]: parseInt(value) });
    // }
  };
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
  ];
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
            <label htmlFor="aOffset">a range</label>
            <Slider
              value={[config["aOffset"], config["aOffset"] + config["aRange"] - 1]}
              onChange={onTestChange("aValues")}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              marks={marks}
              step={5}
            />
            a = {config["aOffset"]} - {config["aOffset"] + config["aRange"] - 1}
          </div>
          <div className="input-group">
            <label htmlFor="bOffset">bOffset</label>
            <Slider
              value={[config["bOffset"], config["bOffset"] + config["bRange"] - 1]}
              onChange={onTestChange("bValues")}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              marks={marks}
              step={5}
            />
            b = {config["bOffset"]} - {config["bOffset"] + config["bRange"] - 1}
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
