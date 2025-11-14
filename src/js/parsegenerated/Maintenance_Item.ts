import Parse from "parse";

import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface Maintenance_ItemAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  category?: string | undefined;
  description?: string | undefined;
  internalNumber?: string | undefined;
  name: string;
  orderNumber?: string | undefined;
  price?: string | undefined;
  sources: Parse.Relation<Maintenance_Item, Source>;
  stock?: number | undefined;
  stockAlarmAt?: number | undefined;
  stockUnit?: string | undefined;
  storageLocation?: string | undefined;
  supplier?: string | undefined;
  tenant: Tenant;
}

export class Maintenance_Item extends Parse.Object<Maintenance_ItemAttributes> {
  static className: string = "OD3_Maintenance_Item";

  constructor(data?: Partial<Maintenance_ItemAttributes>) {
    super("OD3_Maintenance_Item", data as Maintenance_ItemAttributes);
  }

  get category(): string | undefined {
    return super.get("category");
  }
  set category(value: string | undefined) {
    super.set("category", value);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get internalNumber(): string | undefined {
    return super.get("internalNumber");
  }
  set internalNumber(value: string | undefined) {
    super.set("internalNumber", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }

  get orderNumber(): string | undefined {
    return super.get("orderNumber");
  }
  set orderNumber(value: string | undefined) {
    super.set("orderNumber", value);
  }

  get price(): string | undefined {
    return super.get("price");
  }
  set price(value: string | undefined) {
    super.set("price", value);
  }

  get sources(): Parse.Relation<Maintenance_Item, Source> {
    return super.relation("sources");
  }

  get stock(): number | undefined {
    return super.get("stock");
  }
  set stock(value: number | undefined) {
    super.set("stock", value);
  }

  get stockAlarmAt(): number | undefined {
    return super.get("stockAlarmAt");
  }
  set stockAlarmAt(value: number | undefined) {
    super.set("stockAlarmAt", value);
  }

  get stockUnit(): string | undefined {
    return super.get("stockUnit");
  }
  set stockUnit(value: string | undefined) {
    super.set("stockUnit", value);
  }

  get storageLocation(): string | undefined {
    return super.get("storageLocation");
  }
  set storageLocation(value: string | undefined) {
    super.set("storageLocation", value);
  }

  get supplier(): string | undefined {
    return super.get("supplier");
  }
  set supplier(value: string | undefined) {
    super.set("supplier", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_Maintenance_Item", Maintenance_Item);

