import React, { Dispatch, SetStateAction, useState } from "react";
import { IConfig } from "./common";
import "./Settings.css";

interface Props {
  config: IConfig;
  setConfig: Dispatch<SetStateAction<IConfig>>;
}

function Settings({ config, setConfig }: Props) {
  let [toggle, setToggle] = useState<boolean>(false);

  const onConfigChange = ({ target: { id, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [id]: parseInt(value) });

    // debugger
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
            <div>
              <label htmlFor="aOffset">aOffset</label>
              <input
                id="aOffset"
                type="number"
                value={config["aOffset"]}
                onChange={onConfigChange}
              />
            </div>
            <div>
              <label htmlFor="aRange">aRange</label>
              <input id="aRange" type="number" value={config["aRange"]} onChange={onConfigChange} />
            </div>
            <div>
              a = {config["aOffset"]} - {config["aOffset"] + config["aRange"] - 1}
            </div>
          </div>
          <div className="input-group">
            <div>
              <label htmlFor="bOffset">bOffset</label>
              <input
                id="bOffset"
                type="number"
                value={config["bOffset"]}
                onChange={onConfigChange}
              />
            </div>
            <div>
              <label htmlFor="bRange">bRange</label>
              <input id="bRange" type="number" value={config["bRange"]} onChange={onConfigChange} />
            </div>
            <div>
              b = {config["bOffset"]} - {config["bOffset"] + config["bRange"] - 1}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
