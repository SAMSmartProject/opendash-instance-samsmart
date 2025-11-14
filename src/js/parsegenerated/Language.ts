import Parse from "parse";

export interface LanguageAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  label: string;
}

export class Language extends Parse.Object<LanguageAttributes> {
  static className: string = "OD3_Language";

  constructor(data?: Partial<LanguageAttributes>) {
    super("OD3_Language", data as LanguageAttributes);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }
}

Parse.Object.registerSubclass("OD3_Language", Language);

