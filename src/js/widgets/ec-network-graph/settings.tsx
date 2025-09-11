import { useTranslation } from "@opendash/core";
import { createWidgetComponent } from "@opendash/plugin-monitoring";
import {
  Collapse,
  CollapseProps,
  ColorPicker,
  Form,
  Input,
  Switch,
} from "antd";
import * as React from "react";
import { ConfigInterface } from "./types";

export default createWidgetComponent<ConfigInterface>(
  ({ draft, updateDraft, ...context }) => {
    const t = useTranslation();
    const [form] = Form.useForm();

    const items: CollapseProps["items"] = [
      {
        key: "networkgraph-settings",
        label: "Allgemeine Einstellungen",
        children: (
          <Form form={form} name="networkgraph-settings" layout="vertical">
            <Form.Item
              name="gateway"
              label="IP of Standard Gateway"
              rules={[{ required: false }]}
              initialValue={draft.gateway}
            >
              <Input
                onChange={(value) => {
                  updateDraft((draft) => {
                    draft.gateway = value.target.value;
                  });
                }}
              />
            </Form.Item>
            <Form.Item
              name="color"
              label="Farbe der Netzwerkknoten"
              rules={[{ required: false }]}
              initialValue={draft.color}
            >
              <ColorPicker
                onChange={(value) => {
                  updateDraft((draft) => {
                    draft.color = value.toHexString();
                  });
                }}
              />
            </Form.Item>
            <Form.Item
              name="combineDuplicates"
              valuePropName="checked"
              rules={[{ required: false }]}
              initialValue={draft.combineDuplicates}
              label="Knoten einfärben"
            >
              <Switch
                onChange={(checked) =>
                  updateDraft((draft) => {
                    draft.combineDuplicates = checked;
                  })
                }
              />
            </Form.Item>
          </Form>
        ),
      },
    ];

    return <Collapse bordered={false} defaultActiveKey={[0]} items={items} />;
  }
);
