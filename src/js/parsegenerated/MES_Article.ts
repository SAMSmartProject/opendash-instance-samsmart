import Parse from "parse";

import type { Tenant } from "./Tenant";

export interface MES_ArticleAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  artnr: string;
  name: string;
  targettime: number;
  tenant?: Tenant | undefined;
}

export class MES_Article extends Parse.Object<MES_ArticleAttributes> {
  static className: string = "OD3_MES_Article";

  constructor(data?: Partial<MES_ArticleAttributes>) {
    super("OD3_MES_Article", data as MES_ArticleAttributes);
  }

  get artnr(): string {
    return super.get("artnr");
  }
  set artnr(value: string) {
    super.set("artnr", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get targettime(): number {
    return super.get("targettime");
  }
  set targettime(value: number) {
    super.set("targettime", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_MES_Article", MES_Article);

