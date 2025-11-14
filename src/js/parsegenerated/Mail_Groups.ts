import Parse from "parse";

import type { _User } from "./_User";

export interface Mail_GroupsAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  Mails?: string | undefined;
  Name?: string | undefined;
  user?: _User | undefined;
}

export class Mail_Groups extends Parse.Object<Mail_GroupsAttributes> {
  static className: string = "OD3_Mail_Groups";

  constructor(data?: Partial<Mail_GroupsAttributes>) {
    super("OD3_Mail_Groups", data as Mail_GroupsAttributes);
  }

  get Mails(): string | undefined {
    return super.get("Mails");
  }
  set Mails(value: string | undefined) {
    super.set("Mails", value);
  }

  get Name(): string | undefined {
    return super.get("Name");
  }
  set Name(value: string | undefined) {
    super.set("Name", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Mail_Groups", Mail_Groups);

