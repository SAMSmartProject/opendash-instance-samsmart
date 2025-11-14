import Parse from "parse";

import type { SourceMeta } from "./SourceMeta";
import type { Tenant } from "./Tenant";

export interface SourceAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  children: Parse.Relation<Source, Source>;
  meta?: SourceMeta | undefined;
  name?: string | undefined;
  parent?: Source | undefined;
  tag?: string | undefined;
  tenant?: Tenant | undefined;
}

export class Source extends Parse.Object<SourceAttributes> {
  static className: string = "OD3_Source";

  constructor(data?: Partial<SourceAttributes>) {
    super("OD3_Source", data as SourceAttributes);
  }

  get children(): Parse.Relation<Source, Source> {
    return super.relation("children");
  }

  get meta(): SourceMeta | undefined {
    return super.get("meta");
  }
  set meta(value: SourceMeta | undefined) {
    super.set("meta", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get parent(): Source | undefined {
    return super.get("parent");
  }
  set parent(value: Source | undefined) {
    super.set("parent", value);
  }

  get tag(): string | undefined {
    return super.get("tag");
  }
  set tag(value: string | undefined) {
    super.set("tag", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Source", Source);

