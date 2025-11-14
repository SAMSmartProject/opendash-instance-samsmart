import Parse from "parse";

import type { MES_Article } from "./MES_Article";
import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface MES_OrderAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  article?: MES_Article | undefined;
  articlename?: string | undefined;
  articlenr?: string | undefined;
  duration: number;
  order_quantity: number;
  ordernr: string;
  setup_time: number;
  source?: Source | undefined;
  start: Date;
  status?: string | undefined;
  tag?: string | undefined;
  targettime: number;
  tenant: Tenant;
}

export class MES_Order extends Parse.Object<MES_OrderAttributes> {
  static className: string = "OD3_MES_Order";

  constructor(data?: Partial<MES_OrderAttributes>) {
    super("OD3_MES_Order", data as MES_OrderAttributes);
  }

  get article(): MES_Article | undefined {
    return super.get("article");
  }
  set article(value: MES_Article | undefined) {
    super.set("article", value);
  }

  get articlename(): string | undefined {
    return super.get("articlename");
  }
  set articlename(value: string | undefined) {
    super.set("articlename", value);
  }

  get articlenr(): string | undefined {
    return super.get("articlenr");
  }
  set articlenr(value: string | undefined) {
    super.set("articlenr", value);
  }

  get duration(): number {
    return super.get("duration");
  }
  set duration(value: number) {
    super.set("duration", value);
  }

  get order_quantity(): number {
    return super.get("order_quantity");
  }
  set order_quantity(value: number) {
    super.set("order_quantity", value);
  }

  get ordernr(): string {
    return super.get("ordernr");
  }
  set ordernr(value: string) {
    super.set("ordernr", value);
  }

  get setup_time(): number {
    return super.get("setup_time");
  }
  set setup_time(value: number) {
    super.set("setup_time", value);
  }

  get source(): Source | undefined {
    return super.get("source");
  }
  set source(value: Source | undefined) {
    super.set("source", value);
  }

  get start(): Date {
    return super.get("start");
  }
  set start(value: Date) {
    super.set("start", value);
  }

  get status(): string | undefined {
    return super.get("status");
  }
  set status(value: string | undefined) {
    super.set("status", value);
  }

  get tag(): string | undefined {
    return super.get("tag");
  }
  set tag(value: string | undefined) {
    super.set("tag", value);
  }

  get targettime(): number {
    return super.get("targettime");
  }
  set targettime(value: number) {
    super.set("targettime", value);
  }

  get tenant(): Tenant {
    return super.get("tenant");
  }
  set tenant(value: Tenant) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_MES_Order", MES_Order);

