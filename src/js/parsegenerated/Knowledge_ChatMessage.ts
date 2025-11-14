import Parse from "parse";

import type { Knowledge_Chat } from "./Knowledge_Chat";
import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Knowledge_ChatMessageAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  isBotMessage: boolean;
  message: string;
  parentChat: Knowledge_Chat;
  tenant: Tenant;
  user: _User;
}

export class Knowledge_ChatMessage extends Parse.Object<Knowledge_ChatMessageAttributes> {
  static className: string = "OD3_Knowledge_ChatMessage";

  constructor(data?: Partial<Knowledge_ChatMessageAttributes>) {
    super("OD3_Knowledge_ChatMessage", data as Knowledge_ChatMessageAttributes);
  }

  get isBotMessage(): boolean {
    return super.get("isBotMessage");
  }
  set isBotMessage(value: boolean) {
    super.set("isBotMessage", value);
  }

  get message(): string {
    return super.get("message");
  }
  set message(value: string) {
    super.set("message", value);
  }

  get parentChat(): Knowledge_Chat {
    return super.get("parentChat");
  }
  set parentChat(value: Knowledge_Chat) {
    super.set("parentChat", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Knowledge_ChatMessage", Knowledge_ChatMessage);

