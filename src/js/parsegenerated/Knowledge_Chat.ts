import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Knowledge_ChatAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  firstUserMessage?: string | undefined;
  tenant?: Tenant | undefined;
  user: _User;
}

export class Knowledge_Chat extends Parse.Object<Knowledge_ChatAttributes> {
  static className: string = "OD3_Knowledge_Chat";

  constructor(data?: Partial<Knowledge_ChatAttributes>) {
    super("OD3_Knowledge_Chat", data as Knowledge_ChatAttributes);
  }

  get firstUserMessage(): string | undefined {
    return super.get("firstUserMessage");
  }
  set firstUserMessage(value: string | undefined) {
    super.set("firstUserMessage", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Knowledge_Chat", Knowledge_Chat);

