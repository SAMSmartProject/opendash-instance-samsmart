import Parse from "parse";

export interface OWPlcDeviceAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  connectionString: string;
  enabled: boolean;
  extraOptions: any;
  interval: number;
  name?: string | undefined;
  options: any;
}

export class OWPlcDevice extends Parse.Object<OWPlcDeviceAttributes> {
  static className: string = "OD3_OWPlcDevice";

  constructor(data?: Partial<OWPlcDeviceAttributes>) {
    super("OD3_OWPlcDevice", data as OWPlcDeviceAttributes);
  }

  get connectionString(): string {
    return super.get("connectionString");
  }
  set connectionString(value: string) {
    super.set("connectionString", value);
  }

  get enabled(): boolean {
    return super.get("enabled");
  }
  set enabled(value: boolean) {
    super.set("enabled", value);
  }

  get extraOptions(): any {
    return super.get("extraOptions");
  }
  set extraOptions(value: any) {
    super.set("extraOptions", value);
  }

  get interval(): number {
    return super.get("interval");
  }
  set interval(value: number) {
    super.set("interval", value);
  }

  get name(): string | undefined {
    return super.get("name");
  }
  set name(value: string | undefined) {
    super.set("name", value);
  }

  get options(): any {
    return super.get("options");
  }
  set options(value: any) {
    super.set("options", value);
  }
}

Parse.Object.registerSubclass("OD3_OWPlcDevice", OWPlcDevice);

