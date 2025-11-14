import Parse from "parse";

import type { Knowledge_Document } from "./Knowledge_Document";
import type { Tenant } from "./Tenant";

export interface Knowledge_DocumentPageAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  annotations: any[];
  document: Knowledge_Document;
  image: Parse.File;
  label: string;
  page: number;
  tenant: Tenant;
}

export class Knowledge_DocumentPage extends Parse.Object<Knowledge_DocumentPageAttributes> {
  static className: string = "OD3_Knowledge_DocumentPage";

  constructor(data?: Partial<Knowledge_DocumentPageAttributes>) {
    super("OD3_Knowledge_DocumentPage", data as Knowledge_DocumentPageAttributes);
  }

  get annotations(): any[] {
    return super.get("annotations");
  }
  set annotations(value: any[]) {
    super.set("annotations", value);
  }

  get document(): Knowledge_Document {
    return super.get("document");
  }
  set document(value: Knowledge_Document) {
    super.set("document", value);
  }

  get image(): Parse.File {
    return super.get("image");
  }
  set image(value: Parse.File) {
    super.set("image", value);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get page(): number {
    return super.get("page");
  }
  set page(value: number) {
    super.set("page", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Knowledge_DocumentPage", Knowledge_DocumentPage);

