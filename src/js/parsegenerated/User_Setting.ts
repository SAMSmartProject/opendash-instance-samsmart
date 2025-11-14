import Parse from "parse";

export interface User_SettingAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  preferred_language: string;
}

export class User_Setting extends Parse.Object<User_SettingAttributes> {
  static className: string = "OD3_User_Setting";

  constructor(data?: Partial<User_SettingAttributes>) {
    super("OD3_User_Setting", data as User_SettingAttributes);
  }

  get preferred_language(): string {
    return super.get("preferred_language");
  }
  set preferred_language(value: string) {
    super.set("preferred_language", value);
  }
}

Parse.Object.registerSubclass("OD3_User_Setting", User_Setting);

