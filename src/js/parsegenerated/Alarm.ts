import Parse from "parse";

import type { _User } from "./_User";

export interface AlarmAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  action?: any | undefined;
  condition?: any | undefined;
  item_dimension?: number | undefined;
  item_id?: string | undefined;
  item_source?: string | undefined;
  name?: string | undefined;
  sent?: number | undefined;
  trigger?: any | undefined;
  user: _User;
}

export class Alarm extends Parse.Object<AlarmAttributes> {
  static className: string = "OD3_Alarm";

  constructor(data?: Partial<AlarmAttributes>) {
    super("OD3_Alarm", data as AlarmAttributes);
  }

  get action(): any | undefined {
    return super.get("action");
  }
  set action(value: any | undefined) {
    super.set("action", value);
  }

  get condition(): any | undefined {
    return super.get("condition");
  }
  set condition(value: any | undefined) {
    super.set("condition", value);
  }

  get item_dimension(): number | undefined {
    return super.get("item_dimension");
  }
  set item_dimension(value: number | undefined) {
    super.set("item_dimension", value);
  }

  get item_id(): string | undefined {
    return super.get("item_id");
  }
  set item_id(value: string | undefined) {
    super.set("item_id", value);
  }

  get item_source(): string | undefined {
    return super.get("item_source");
  }
  set item_source(value: string | undefined) {
    super.set("item_source", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get sent(): number | undefined {
    return super.get("sent");
  }
  set sent(value: number | undefined) {
    super.set("sent", value);
  }

  get trigger(): any | undefined {
    return super.get("trigger");
  }
  set trigger(value: any | undefined) {
    super.set("trigger", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Alarm", Alarm);

