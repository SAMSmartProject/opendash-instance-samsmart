import Parse from "parse";

import type { _Role } from "./_Role";
import type { _User } from "./_User";
import type { Tenant } from "./Tenant";
import type { Maintenance_Ticket } from "./Maintenance_Ticket";

export interface Maintenance_ProjectAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  assignedRoles: Parse.Relation<Maintenance_Project, _Role>;
  assignedUsers: Parse.Relation<Maintenance_Project, _User>;
  color?: string | undefined;
  description: string;
  end?: Date | undefined;
  finished: boolean;
  icon?: string | undefined;
  name: string;
  parent?: Maintenance_Project | undefined;
  start?: Date | undefined;
  tenant?: Tenant | undefined;
  tickets: Parse.Relation<Maintenance_Project, Maintenance_Ticket>;
  user?: _User | undefined;
}

export class Maintenance_Project extends Parse.Object<Maintenance_ProjectAttributes> {
  static className: string = "OD3_Maintenance_Project";

  constructor(data?: Partial<Maintenance_ProjectAttributes>) {
    super("OD3_Maintenance_Project", data as Maintenance_ProjectAttributes);
  }

  get assignedRoles(): Parse.Relation<Maintenance_Project, _Role> {
    return super.relation("assignedRoles");
  }

  get assignedUsers(): Parse.Relation<Maintenance_Project, _User> {
    return super.relation("assignedUsers");
  }

  get color(): string | undefined {
    return super.get("color");
  }
  set color(value: string | undefined) {
    super.set("color", value);
  }

  get description(): string {
    return super.get("description");
  }
  set description(value: string) {
    super.set("description", value);
  }

  get end(): Date | undefined {
    return super.get("end");
  }
  set end(value: Date | undefined) {
    super.set("end", value);
  }

  get finished(): boolean {
    return super.get("finished");
  }
  set finished(value: boolean) {
    super.set("finished", value);
  }

  get icon(): string | undefined {
    return super.get("icon");
  }
  set icon(value: string | undefined) {
    super.set("icon", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get parent(): Maintenance_Project | undefined {
    return super.get("parent");
  }
  set parent(value: Maintenance_Project | undefined) {
    super.set("parent", value);
  }

  get start(): Date | undefined {
    return super.get("start");
  }
  set start(value: Date | undefined) {
    super.set("start", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get tickets(): Parse.Relation<Maintenance_Project, Maintenance_Ticket> {
    return super.relation("tickets");
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Project", Maintenance_Project);

