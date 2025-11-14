import Parse from "parse";

export interface BDE_PageAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  data?: any | undefined;
  pageID?: string | undefined;
}

export class BDE_Page extends Parse.Object<BDE_PageAttributes> {
  static className: string = "OD3_BDE_Page";

  constructor(data?: Partial<BDE_PageAttributes>) {
    super("OD3_BDE_Page", data as BDE_PageAttributes);
  }

  get data(): any | undefined {
    return super.get("data");
  }
  set data(value: any | undefined) {
    super.set("data", value);
  }

  get pageID(): string | undefined {
    return super.get("pageID");
  }
  set pageID(value: string | undefined) {
    super.set("pageID", value);
  }
}

Parse.Object.registerSubclass("OD3_BDE_Page", BDE_Page);

