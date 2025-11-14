import Parse from "parse";

export interface BDE_ResultAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  result?: any | undefined;
  RID?: string | undefined;
  rueckmeldeUnit?: string | undefined;
}

export class BDE_Result extends Parse.Object<BDE_ResultAttributes> {
  static className: string = "OD3_BDE_Result";

  constructor(data?: Partial<BDE_ResultAttributes>) {
    super("OD3_BDE_Result", data as BDE_ResultAttributes);
  }

  get result(): any | undefined {
    return super.get("result");
  }
  set result(value: any | undefined) {
    super.set("result", value);
  }

  get RID(): string | undefined {
    return super.get("RID");
  }
  set RID(value: string | undefined) {
    super.set("RID", value);
  }

  get rueckmeldeUnit(): string | undefined {
    return super.get("rueckmeldeUnit");
  }
  set rueckmeldeUnit(value: string | undefined) {
    super.set("rueckmeldeUnit", value);
  }
}

Parse.Object.registerSubclass("OD3_BDE_Result", BDE_Result);

