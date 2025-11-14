import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface SourceMetaAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  data?: any | undefined;
  description?: string | undefined;
  file?: Parse.File | undefined;
  location?: Parse.GeoPoint | undefined;
  name?: string | undefined;
  tenant?: Tenant | undefined;
}

export class SourceMeta extends Parse.Object<SourceMetaAttributes> {
  static className: string = "OD3_SourceMeta";

  constructor(data?: Partial<SourceMetaAttributes>) {
    super("OD3_SourceMeta", data as SourceMetaAttributes);
  }

  get data(): any | undefined {
    return super.get("data");
  }
  set data(value: any | undefined) {
    super.set("data", value);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get file(): Parse.File | undefined {
    return super.get("file");
  }
  set file(value: Parse.File | undefined) {
    super.set("file", value);
  }

  get location(): Parse.GeoPoint | undefined {
    return super.get("location");
  }
  set location(value: Parse.GeoPoint | undefined) {
    super.set("location", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_SourceMeta", SourceMeta);

