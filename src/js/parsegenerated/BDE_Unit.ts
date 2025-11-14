import Parse from "parse";

import type { BDE_Form } from "./BDE_Form";

export interface BDE_UnitAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  forms: Parse.Relation<BDE_Unit, BDE_Form>;
  image?: Parse.File | undefined;
  name?: string | undefined;
  source?: string | undefined;
}

export class BDE_Unit extends Parse.Object<BDE_UnitAttributes> {
  static className: string = "OD3_BDE_Unit";

  constructor(data?: Partial<BDE_UnitAttributes>) {
    super("OD3_BDE_Unit", data as BDE_UnitAttributes);
  }

  get forms(): Parse.Relation<BDE_Unit, BDE_Form> {
    return super.relation("forms");
  }

  get image(): Parse.File | undefined {
    return super.get("image");
  }
  set image(value: Parse.File | undefined) {
    super.set("image", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get source(): string | undefined {
    return super.get("source");
  }
  set source(value: string | undefined) {
    super.set("source", value);
  }
}

Parse.Object.registerSubclass("OD3_BDE_Unit", BDE_Unit);

