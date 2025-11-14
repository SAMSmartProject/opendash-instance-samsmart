import Parse from "parse";

import type { Tenant } from "./Tenant";
import type { _User } from "./_User";

export interface Monitoring_JobsAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  group?: string | undefined;
  interval?: any | undefined;
  last_execution_ow_job?: number | undefined;
  name?: string | undefined;
  next_execution_ow_job?: number | undefined;
  options?: any | undefined;
  tenant?: Tenant | undefined;
  type?: string | undefined;
  user?: _User | undefined;
}

export class Monitoring_Jobs extends Parse.Object<Monitoring_JobsAttributes> {
  static className: string = "OD3_Monitoring_Jobs";

  constructor(data?: Partial<Monitoring_JobsAttributes>) {
    super("OD3_Monitoring_Jobs", data as Monitoring_JobsAttributes);
  }

  get group(): string | undefined {
    return super.get("group");
  }
  set group(value: string | undefined) {
    super.set("group", value);
  }

  get interval(): any | undefined {
    return super.get("interval");
  }
  set interval(value: any | undefined) {
    super.set("interval", value);
  }

  get last_execution_ow_job(): number | undefined {
    return super.get("last_execution_ow_job");
  }
  set last_execution_ow_job(value: number | undefined) {
    super.set("last_execution_ow_job", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get next_execution_ow_job(): number | undefined {
    return super.get("next_execution_ow_job");
  }
  set next_execution_ow_job(value: number | undefined) {
    super.set("next_execution_ow_job", value);
  }

  get options(): any | undefined {
    return super.get("options");
  }
  set options(value: any | undefined) {
    super.set("options", value);
  }

  get tenant(): Tenant | undefined {
    return super.get("tenant");
  }
  set tenant(value: Tenant | undefined) {
    super.set("tenant", value);
  }

  get type(): string | undefined {
    return super.get("type");
  }
  set type(value: string | undefined) {
    super.set("type", value);
  }

  get user(): _User | undefined {
    return super.get("user");
  }
  set user(value: _User | undefined) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Monitoring_Jobs", Monitoring_Jobs);

