import Parse from "parse";

export interface Core_TokenAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  key: string;
  payload: any;
  url: string;
  used: boolean;
}

export class Core_Token extends Parse.Object<Core_TokenAttributes> {
  static className: string = "OD3_Core_Token";

  constructor(data?: Partial<Core_TokenAttributes>) {
    super("OD3_Core_Token", data as Core_TokenAttributes);
  }

  get key(): string {
    return super.get("key");
  }
  set key(value: string) {
    super.set("key", value);
  }

  get payload(): any {
    return super.get("payload");
  }
  set payload(value: any) {
    super.set("payload", value);
  }

  get url(): string {
    return super.get("url");
  }
  set url(value: string) {
    super.set("url", value);
  }

  get used(): boolean {
    return super.get("used");
  }
  set used(value: boolean) {
    super.set("used", value);
  }
}

Parse.Object.registerSubclass("OD3_Core_Token", Core_Token);

