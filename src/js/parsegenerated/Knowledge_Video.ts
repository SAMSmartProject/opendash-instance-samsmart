import Parse from "parse";

import type { Knowledge_Category } from "./Knowledge_Category";
import type { Language } from "./Language";
import type { Tenant } from "./Tenant";

export interface Knowledge_VideoAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  category: Knowledge_Category;
  descriptionMarkdown?: string | undefined;
  label: string;
  language: Language;
  tenant: Tenant;
  thumbnailImage: Parse.File;
  video: Parse.File;
}

export class Knowledge_Video extends Parse.Object<Knowledge_VideoAttributes> {
  static className: string = "OD3_Knowledge_Video";

  constructor(data?: Partial<Knowledge_VideoAttributes>) {
    super("OD3_Knowledge_Video", data as Knowledge_VideoAttributes);
  }

  get category(): Knowledge_Category {
    return super.get("category");
  }
  set category(value: Knowledge_Category) {
    super.set("category", value);
  }

  get descriptionMarkdown(): string | undefined {
    return super.get("descriptionMarkdown");
  }
  set descriptionMarkdown(value: string | undefined) {
    super.set("descriptionMarkdown", value);
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

  get thumbnailImage(): Parse.File {
    return super.get("thumbnailImage");
  }
  set thumbnailImage(value: Parse.File) {
    super.set("thumbnailImage", value);
  }

  get video(): Parse.File {
    return super.get("video");
  }
  set video(value: Parse.File) {
    super.set("video", value);
  }
}

Parse.Object.registerSubclass("OD3_Knowledge_Video", Knowledge_Video);

