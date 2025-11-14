import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface WidgetPresetAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  config: any;
  description: string;
  imageLink: string;
  label: string;
  layout: any[];
  tags: any[];
  tenant?: Tenant | undefined;
  type: string;
  user?: _User | undefined;
}

export class WidgetPreset extends Parse.Object<WidgetPresetAttributes> {
  static className: string = "OD3_WidgetPreset";

  constructor(data?: Partial<WidgetPresetAttributes>) {
    super("OD3_WidgetPreset", data as WidgetPresetAttributes);
  }

  get config(): any {
    return super.get("config");
  }
  set config(value: any) {
    super.set("config", value);
  }

  get description(): string {
    return super.get("description");
  }
  set description(value: string) {
    super.set("description", value);
  }

  get imageLink(): string {
    return super.get("imageLink");
  }
  set imageLink(value: string) {
    super.set("imageLink", value);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get layout(): any[] {
    return super.get("layout");
  }
  set layout(value: any[]) {
    super.set("layout", value);
  }

  get tags(): any[] {
    return super.get("tags");
  }
  set tags(value: any[]) {
    super.set("tags", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get type(): string {
    return super.get("type");
  }
  set type(value: string) {
    super.set("type", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_WidgetPreset", WidgetPreset);

