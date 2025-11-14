import Parse from "parse";

import type { MES_Article } from "./MES_Article";
import type { Source } from "./Source";
import type { Tenant } from "./Tenant";

export interface MES_OrderPlanAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  article?: MES_Article | undefined;
  ordernr: string;
  planEnd?: Date | undefined;
  planStart?: Date | undefined;
  setup_time: number;
  source?: Source | undefined;
  target_quantity: number;
  tenant?: Tenant | undefined;
}

export class MES_OrderPlan extends Parse.Object<MES_OrderPlanAttributes> {
  static className: string = "OD3_MES_OrderPlan";

  constructor(data?: Partial<MES_OrderPlanAttributes>) {
    super("OD3_MES_OrderPlan", data as MES_OrderPlanAttributes);
  }

  get article(): MES_Article | undefined {
    return super.get("article");
  }
  set article(value: MES_Article | undefined) {
    super.set("article", value);
  }

  get ordernr(): string {
    return super.get("ordernr");
  }
  set ordernr(value: string) {
    super.set("ordernr", value);
  }

  get planEnd(): Date | undefined {
    return super.get("planEnd");
  }
  set planEnd(value: Date | undefined) {
    super.set("planEnd", value);
  }

  get planStart(): Date | undefined {
    return super.get("planStart");
  }
  set planStart(value: Date | undefined) {
    super.set("planStart", value);
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

  get target_quantity(): number {
    return super.get("target_quantity");
  }
  set target_quantity(value: number) {
    super.set("target_quantity", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }
}

Parse.Object.registerSubclass("OD3_MES_OrderPlan", MES_OrderPlan);

