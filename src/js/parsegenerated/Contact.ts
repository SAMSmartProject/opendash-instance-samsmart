import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface ContactAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  city?: string | undefined;
  department?: string | undefined;
  description?: string | undefined;
  email?: string | undefined;
  firstname?: string | undefined;
  lastname?: string | undefined;
  phone?: string | undefined;
  position?: string | undefined;
  postal?: string | undefined;
  street?: string | undefined;
  tenant?: Tenant | undefined;
  user?: _User | undefined;
  website?: string | undefined;
}

export class Contact extends Parse.Object<ContactAttributes> {
  static className: string = "OD3_Contact";

  constructor(data?: Partial<ContactAttributes>) {
    super("OD3_Contact", data as ContactAttributes);
  }

  get city(): string | undefined {
    return super.get("city");
  }
  set city(value: string | undefined) {
    super.set("city", value);
  }

  get department(): string | undefined {
    return super.get("department");
  }
  set department(value: string | undefined) {
    super.set("department", value);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get email(): string | undefined {
    return super.get("email");
  }
  set email(value: string | undefined) {
    super.set("email", value);
  }

  get firstname(): string | undefined {
    return super.get("firstname");
  }
  set firstname(value: string | undefined) {
    super.set("firstname", value);
  }

  get lastname(): string | undefined {
    return super.get("lastname");
  }
  set lastname(value: string | undefined) {
    super.set("lastname", value);
  }

  get phone(): string | undefined {
    return super.get("phone");
  }
  set phone(value: string | undefined) {
    super.set("phone", value);
  }

  get position(): string | undefined {
    return super.get("position");
  }
  set position(value: string | undefined) {
    super.set("position", value);
  }

  get postal(): string | undefined {
    return super.get("postal");
  }
  set postal(value: string | undefined) {
    super.set("postal", value);
  }

  get street(): string | undefined {
    return super.get("street");
  }
  set street(value: string | undefined) {
    super.set("street", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }

  get website(): string | undefined {
    return super.get("website");
  }
  set website(value: string | undefined) {
    super.set("website", value);
  }
}

Parse.Object.registerSubclass("OD3_Contact", Contact);

