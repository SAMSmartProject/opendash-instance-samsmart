import Parse from "parse";

import type { _User } from "./_User";

export interface UserDataAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  key?: string | undefined;
  user: _User;
  value?: string | undefined;
}

export class UserData extends Parse.Object<UserDataAttributes> {
  static className: string = "OD3_UserData";

  constructor(data?: Partial<UserDataAttributes>) {
    super("OD3_UserData", data as UserDataAttributes);
  }

  get key(): string | undefined {
    return super.get("key");
  }
  set key(value: string | undefined) {
    super.set("key", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }

  get value(): string | undefined {
    return super.get("value");
  }
  set value(value: string | undefined) {
    super.set("value", value);
  }
}

Parse.Object.registerSubclass("OD3_UserData", UserData);

