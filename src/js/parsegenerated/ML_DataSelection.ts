import Parse from "parse";

export interface ML_DataSelectionAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  label?: string | undefined;
  pipe: any;
}

export class ML_DataSelection extends Parse.Object<ML_DataSelectionAttributes> {
  static className: string = "OD3_ML_DataSelection";

  constructor(data?: Partial<ML_DataSelectionAttributes>) {
    super("OD3_ML_DataSelection", data as ML_DataSelectionAttributes);
  }

  get label(): string | undefined {
    return super.get("label");
  }
  set label(value: string | undefined) {
    super.set("label", value);
  }

  get pipe(): any {
    return super.get("pipe");
  }
  set pipe(value: any) {
    super.set("pipe", value);
  }
}

Parse.Object.registerSubclass("OD3_ML_DataSelection", ML_DataSelection);

