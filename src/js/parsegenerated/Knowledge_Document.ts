import Parse from "parse";

import type { Knowledge_Category } from "./Knowledge_Category";
import type { Language } from "./Language";
import type { Tenant } from "./Tenant";

export interface Knowledge_DocumentAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  annotations: any[];
  category: Knowledge_Category;
  document: Parse.File;
  label: string;
  language: Language;
  tenant: Tenant;
}

export class Knowledge_Document extends Parse.Object<Knowledge_DocumentAttributes> {
  static className: string = "OD3_Knowledge_Document";

  constructor(data?: Partial<Knowledge_DocumentAttributes>) {
    super("OD3_Knowledge_Document", data as Knowledge_DocumentAttributes);
  }

  get annotations(): any[] {
    return super.get("annotations");
  }
  set annotations(value: any[]) {
    super.set("annotations", value);
  }

  get category(): Knowledge_Category {
    return super.get("category");
  }
  set category(value: Knowledge_Category) {
    super.set("category", value);
  }

  get document(): Parse.File {
    return super.get("document");
  }
  set document(value: Parse.File) {
    super.set("document", value);
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

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Knowledge_Document", Knowledge_Document);

