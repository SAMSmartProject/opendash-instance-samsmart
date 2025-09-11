import { useTranslation } from "@opendash/core";
import { createWidgetComponent } from "@opendash/plugin-monitoring";
import * as React from "react";
import { ConfigInterface } from "./types";

export default createWidgetComponent<ConfigInterface>(
  ({ draft, updateDraft, ...context }) => {
    const t = useTranslation();
    return <></>;
  }
);
