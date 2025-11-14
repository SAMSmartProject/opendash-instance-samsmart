import Parse from "parse";

import type { Language } from "./Language";
import type { Tenant } from "./Tenant";

export interface Knowledge_CategoryAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  label: string;
  language: Language;
  parent?: Knowledge_Category | undefined;
  tenant: Tenant;
}

export class Knowledge_Category extends Parse.Object<Knowledge_CategoryAttributes> {
  static className: string = "OD3_Knowledge_Category";

  constructor(data?: Partial<Knowledge_CategoryAttributes>) {
    super("OD3_Knowledge_Category", data as Knowledge_CategoryAttributes);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get language(): Language {
    return super.get("language");
  }
  set language(value: Language) {
    super.set("language", value);
  }

  get parent(): Knowledge_Category | undefined {
    return super.get("parent");
  }
  set parent(value: Knowledge_Category | undefined) {
    super.set("parent", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Knowledge_Category", Knowledge_Category);

