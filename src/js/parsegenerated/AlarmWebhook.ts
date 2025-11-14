import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface AlarmWebhookAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  comment?: string | undefined;
  extraOptions: any;
  header: any;
  method: string;
  name?: string | undefined;
  payload: string;
  tenant?: Tenant | undefined;
  url: string;
  user?: _User | undefined;
}

export class AlarmWebhook extends Parse.Object<AlarmWebhookAttributes> {
  static className: string = "OD3_AlarmWebhook";

  constructor(data?: Partial<AlarmWebhookAttributes>) {
    super("OD3_AlarmWebhook", data as AlarmWebhookAttributes);
  }

  get comment(): string | undefined {
    return super.get("comment");
  }
  set comment(value: string | undefined) {
    super.set("comment", value);
  }

  get extraOptions(): any {
    return super.get("extraOptions");
  }
  set extraOptions(value: any) {
    super.set("extraOptions", value);
  }

  get header(): any {
    return super.get("header");
  }
  set header(value: any) {
    super.set("header", value);
  }

  get method(): string {
    return super.get("method");
  }
  set method(value: string) {
    super.set("method", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get payload(): string {
    return super.get("payload");
  }
  set payload(value: string) {
    super.set("payload", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get url(): string {
    return super.get("url");
  }
  set url(value: string) {
    super.set("url", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_AlarmWebhook", AlarmWebhook);

