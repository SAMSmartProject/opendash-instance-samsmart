import Parse from "parse";

import type { User_Setting } from "./User_Setting";
import type { Tenant } from "./Tenant";

export interface _UserAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  authData?: any | undefined;
  email?: string | undefined;
  emailVerified?: boolean | undefined;
  firstname?: string | undefined;
  lastname?: string | undefined;
  ldap?: boolean | undefined;
  ldap_dn?: string | undefined;
  miaas_cities: any[];
  miaas_userType?: string | undefined;
  miaasUserScope?: string | undefined;
  name?: string | undefined;
  password?: string | undefined;
  settings?: User_Setting | undefined;
  tenant?: Tenant | undefined;
  tenantAdmin: boolean;
  tenantBanned?: boolean | undefined;
  tenantChanged?: boolean | undefined;
  tenantGlobal?: boolean | undefined;
  tenantVerified?: boolean | undefined;
  username?: string | undefined;
}

export type _User = Parse.User<_UserAttributes>;

