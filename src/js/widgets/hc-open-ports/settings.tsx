import { createWidgetComponent } from "@opendash/plugin-monitoring";
import * as React from "react";
import { ConfigInterface } from "./types";


export default createWidgetComponent<ConfigInterface>(
  ({ draft, assignToDraft, updateDraft, ...context }) => {
    return (
      <div style={{ padding: 10 }}>
       
      </div>
    );
  }
);
