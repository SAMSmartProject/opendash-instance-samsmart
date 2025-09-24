import { useTranslation } from "@opendash/core";
import { createWidgetComponent } from "@opendash/plugin-monitoring";
import { Collapse, CollapseProps, Form } from "antd";
import * as React from "react";
import { ConfigInterface } from "./types";

export default createWidgetComponent<ConfigInterface>(
  ({ draft, updateDraft, ...context }) => {
    const t = useTranslation();
    const [form] = Form.useForm();

    const items: CollapseProps["items"] = [
      {
        key: "openports-settings",
        label: "Allgemeine Einstellungen",
        children: (
          <Form form={form} name="openports-settings" layout="vertical"></Form>
        ),
      },
    ];

    return <Collapse bordered={false} defaultActiveKey={[0]} items={items} />;
  }
);
