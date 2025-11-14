import Parse from "parse";

export interface BDE_FormAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  entries?: any[] | undefined;
  form?: any | undefined;
  name?: string | undefined;
  pinOnFrontpageLink?: string | undefined;
  RID?: string | undefined;
  storeUserInfo: boolean;
  visible_in_app: boolean;
}

export class BDE_Form extends Parse.Object<BDE_FormAttributes> {
  static className: string = "OD3_BDE_Form";

  constructor(data?: Partial<BDE_FormAttributes>) {
    super("OD3_BDE_Form", data as BDE_FormAttributes);
  }

  get entries(): any[] | undefined {
    return super.get("entries");
  }
  set entries(value: any[] | undefined) {
    super.set("entries", value);
  }

  get form(): any | undefined {
    return super.get("form");
  }
  set form(value: any | undefined) {
    super.set("form", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get pinOnFrontpageLink(): string | undefined {
    return super.get("pinOnFrontpageLink");
  }
  set pinOnFrontpageLink(value: string | undefined) {
    super.set("pinOnFrontpageLink", value);
  }

  get RID(): string | undefined {
    return super.get("RID");
  }
  set RID(value: string | undefined) {
    super.set("RID", value);
  }

  get storeUserInfo(): boolean {
    return super.get("storeUserInfo");
  }
  set storeUserInfo(value: boolean) {
    super.set("storeUserInfo", value);
  }

  get visible_in_app(): boolean {
    return super.get("visible_in_app");
  }
  set visible_in_app(value: boolean) {
    super.set("visible_in_app", value);
  }
}

Parse.Object.registerSubclass("OD3_BDE_Form", BDE_Form);

