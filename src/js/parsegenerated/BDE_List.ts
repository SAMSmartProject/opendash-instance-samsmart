import Parse from "parse";

export interface BDE_ListAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  list: string;
}

export class BDE_List extends Parse.Object<BDE_ListAttributes> {
  static className: string = "OD3_BDE_List";

  constructor(data?: Partial<BDE_ListAttributes>) {
    super("OD3_BDE_List", data as BDE_ListAttributes);
  }

  get list(): string {
    return super.get("list");
  }
  set list(value: string) {
    super.set("list", value);
  }
}

Parse.Object.registerSubclass("OD3_BDE_List", BDE_List);

