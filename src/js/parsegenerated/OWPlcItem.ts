import Parse from "parse";

import type { OWPlcDevice } from "./OWPlcDevice";
import type { Source } from "./Source";

export interface OWPlcItemAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  DeviceID?: OWPlcDevice | undefined;
  enabled: boolean;
  extraOptions?: any | undefined;
  label: string;
  note?: string | undefined;
  onChange: boolean;
  source?: Source | undefined;
  type: string;
  unit: string;
}

export class OWPlcItem extends Parse.Object<OWPlcItemAttributes> {
  static className: string = "OD3_OWPlcItem";

  constructor(data?: Partial<OWPlcItemAttributes>) {
    super("OD3_OWPlcItem", data as OWPlcItemAttributes);
  }

  get address(): string {
    return super.get("address");
  }
  set address(value: string) {
    super.set("address", value);
  }

  get DeviceID(): OWPlcDevice | undefined {
    return super.get("DeviceID");
  }
  set DeviceID(value: OWPlcDevice | undefined) {
    super.set("DeviceID", value);
  }

  get enabled(): boolean {
    return super.get("enabled");
  }
  set enabled(value: boolean) {
    super.set("enabled", value);
  }

  get extraOptions(): any | undefined {
    return super.get("extraOptions");
  }
  set extraOptions(value: any | undefined) {
    super.set("extraOptions", value);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get note(): string | undefined {
    return super.get("note");
  }
  set note(value: string | undefined) {
    super.set("note", value);
  }

  get onChange(): boolean {
    return super.get("onChange");
  }
  set onChange(value: boolean) {
    super.set("onChange", value);
  }

  get source(): Source | undefined {
    return super.get("source");
  }
  set source(value: Source | undefined) {
    super.set("source", value);
  }

  get type(): string {
    return super.get("type");
  }
  set type(value: string) {
    super.set("type", value);
  }

  get unit(): string {
    return super.get("unit");
  }
  set unit(value: string) {
    super.set("unit", value);
  }
}

Parse.Object.registerSubclass("OD3_OWPlcItem", OWPlcItem);

