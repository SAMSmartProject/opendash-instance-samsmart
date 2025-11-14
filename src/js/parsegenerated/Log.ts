import Parse from "parse";

export interface LogAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  references: any;
  type: string;
}

export class Log extends Parse.Object<LogAttributes> {
  static className: string = "OD3_Log";

  constructor(data?: Partial<LogAttributes>) {
    super("OD3_Log", data as LogAttributes);
  }

  get references(): any {
    return super.get("references");
  }
  set references(value: any) {
    super.set("references", value);
  }

  get type(): string {
    return super.get("type");
  }
  set type(value: string) {
    super.set("type", value);
  }
}

Parse.Object.registerSubclass("OD3_Log", Log);

