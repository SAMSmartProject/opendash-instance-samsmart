import Parse from "parse";

import type { Knowledge_Category } from "./Knowledge_Category";
import type { Language } from "./Language";
import type { Tenant } from "./Tenant";

export interface Knowledge_ArticleAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  category: Knowledge_Category;
  label: string;
  language: Language;
  markdown: string;
  tenant: Tenant;
}

export class Knowledge_Article extends Parse.Object<Knowledge_ArticleAttributes> {
  static className: string = "OD3_Knowledge_Article";

  constructor(data?: Partial<Knowledge_ArticleAttributes>) {
    super("OD3_Knowledge_Article", data as Knowledge_ArticleAttributes);
  }

  get category(): Knowledge_Category {
    return super.get("category");
  }
  set category(value: Knowledge_Category) {
    super.set("category", value);
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

  get markdown(): string {
    return super.get("markdown");
  }
  set markdown(value: string) {
    super.set("markdown", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Knowledge_Article", Knowledge_Article);

