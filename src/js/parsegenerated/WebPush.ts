import Parse from "parse";

import type { _User } from "./_User";

export interface WebPushAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  label: string;
  subscription: any;
  user: _User;
}

export class WebPush extends Parse.Object<WebPushAttributes> {
  static className: string = "OD3_WebPush";

  constructor(data?: Partial<WebPushAttributes>) {
    super("OD3_WebPush", data as WebPushAttributes);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get subscription(): any {
    return super.get("subscription");
  }
  set subscription(value: any) {
    super.set("subscription", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_WebPush", WebPush);

