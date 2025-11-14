import Parse from "parse";

import type { Maintenance_Media } from "./Maintenance_Media";
import type { Source } from "./Source";
import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Maintenance_Source_FileAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  files: Parse.Relation<Maintenance_Source_File, Maintenance_Media>;
  source?: Source | undefined;
  tenant?: Tenant | undefined;
  user?: _User | undefined;
}

export class Maintenance_Source_File extends Parse.Object<Maintenance_Source_FileAttributes> {
  static className: string = "OD3_Maintenance_Source_File";

  constructor(data?: Partial<Maintenance_Source_FileAttributes>) {
    super("OD3_Maintenance_Source_File", data as Maintenance_Source_FileAttributes);
  }

  get files(): Parse.Relation<Maintenance_Source_File, Maintenance_Media> {
    return super.relation("files");
  }

  get source(): Source | undefined {
    return super.get("source");
  }
  set source(value: Source | undefined) {
    super.set("source", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Source_File", Maintenance_Source_File);

