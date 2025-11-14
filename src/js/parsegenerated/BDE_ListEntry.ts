import Parse from "parse";

import type { BDE_List } from "./BDE_List";

export interface BDE_ListEntryAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  key: string;
  list: BDE_List;
  value: string;
}

export class BDE_ListEntry extends Parse.Object<BDE_ListEntryAttributes> {
  static className: string = "OD3_BDE_ListEntry";

  constructor(data?: Partial<BDE_ListEntryAttributes>) {
    super("OD3_BDE_ListEntry", data as BDE_ListEntryAttributes);
  }

  get key(): string {
    return super.get("key");
  }
  set key(value: string) {
    super.set("key", value);
  }

  get list(): BDE_List {
    return super.get("list");
  }
  set list(value: BDE_List) {
    super.set("list", value);
  }

  get value(): string {
    return super.get("value");
  }
  set value(value: string) {
    super.set("value", value);
  }
}

Parse.Object.registerSubclass("OD3_BDE_ListEntry", BDE_ListEntry);

