import Parse from "parse";

import type { Source } from "./Source";
import type { TenantMeta } from "./TenantMeta";

export interface TenantAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  dataProtectionUrl: string;
  dataSource?: Source | undefined;
  description: string;
  hasDataSource: boolean;
  icon?: Parse.File | undefined;
  imprintUrl: string;
  interactWithOtherTenants: boolean;
  label: string;
  logo?: Parse.File | undefined;
  meta?: TenantMeta | undefined;
  public: boolean;
  tagPrefix?: string | undefined;
}

export class Tenant extends Parse.Object<TenantAttributes> {
  static className: string = "OD3_Tenant";

  constructor(data?: Partial<TenantAttributes>) {
    super("OD3_Tenant", data as TenantAttributes);
  }

  get dataProtectionUrl(): string {
    return super.get("dataProtectionUrl");
  }
  set dataProtectionUrl(value: string) {
    super.set("dataProtectionUrl", value);
  }

  get dataSource(): Source | undefined {
    return super.get("dataSource");
  }
  set dataSource(value: Source | undefined) {
    super.set("dataSource", value);
  }

  get description(): string {
    return super.get("description");
  }
  set description(value: string) {
    super.set("description", value);
  }

  get hasDataSource(): boolean {
    return super.get("hasDataSource");
  }
  set hasDataSource(value: boolean) {
    super.set("hasDataSource", value);
  }

  get icon(): Parse.File | undefined {
    return super.get("icon");
  }
  set icon(value: Parse.File | undefined) {
    super.set("icon", value);
  }

  get imprintUrl(): string {
    return super.get("imprintUrl");
  }
  set imprintUrl(value: string) {
    super.set("imprintUrl", value);
  }

  get interactWithOtherTenants(): boolean {
    return super.get("interactWithOtherTenants");
  }
  set interactWithOtherTenants(value: boolean) {
    super.set("interactWithOtherTenants", value);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get logo(): Parse.File | undefined {
    return super.get("logo");
  }
  set logo(value: Parse.File | undefined) {
    super.set("logo", value);
  }

  get meta(): TenantMeta | undefined {
    return super.get("meta");
  }
  set meta(value: TenantMeta | undefined) {
    super.set("meta", value);
  }

  get public(): boolean {
    return super.get("public");
  }
  set public(value: boolean) {
    super.set("public", value);
  }

  get tagPrefix(): string | undefined {
    return super.get("tagPrefix");
  }
  set tagPrefix(value: string | undefined) {
    super.set("tagPrefix", value);
  }
}

Parse.Object.registerSubclass("OD3_Tenant", Tenant);

