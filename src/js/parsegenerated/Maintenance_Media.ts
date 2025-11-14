import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface Maintenance_MediaAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string | undefined;
  media: Parse.File;
  tenant?: Tenant | undefined;
}

export class Maintenance_Media extends Parse.Object<Maintenance_MediaAttributes> {
  static className: string = "OD3_Maintenance_Media";

  constructor(data?: Partial<Maintenance_MediaAttributes>) {
    super("OD3_Maintenance_Media", data as Maintenance_MediaAttributes);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get media(): Parse.File {
    return super.get("media");
  }
  set media(value: Parse.File) {
    super.set("media", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Media", Maintenance_Media);

