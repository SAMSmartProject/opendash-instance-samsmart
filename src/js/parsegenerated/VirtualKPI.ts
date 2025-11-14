import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface VirtualKPIAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  label: string;
  pipe: any;
  template: any;
  tenant?: Tenant | undefined;
}

export class VirtualKPI extends Parse.Object<VirtualKPIAttributes> {
  static className: string = "OD3_VirtualKPI";

  constructor(data?: Partial<VirtualKPIAttributes>) {
    super("OD3_VirtualKPI", data as VirtualKPIAttributes);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get pipe(): any {
    return super.get("pipe");
  }
  set pipe(value: any) {
    super.set("pipe", value);
  }

  get template(): any {
    return super.get("template");
  }
  set template(value: any) {
    super.set("template", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_VirtualKPI", VirtualKPI);

