import Parse from "parse";

import type { Dashboard } from "./Dashboard";

export interface Monitoring_SlideshowAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  dashboards: Parse.Relation<Monitoring_Slideshow, Dashboard>;
  interval: number;
  name: string;
}

export class Monitoring_Slideshow extends Parse.Object<Monitoring_SlideshowAttributes> {
  static className: string = "OD3_Monitoring_Slideshow";

  constructor(data?: Partial<Monitoring_SlideshowAttributes>) {
    super("OD3_Monitoring_Slideshow", data as Monitoring_SlideshowAttributes);
  }

  get dashboards(): Parse.Relation<Monitoring_Slideshow, Dashboard> {
    return super.relation("dashboards");
  }

  get interval(): number {
    return super.get("interval");
  }
  set interval(value: number) {
    super.set("interval", value);
  }

  get name(): string {
    return super.get("name");
  }
  set name(value: string) {
    super.set("name", value);
  }
}

Parse.Object.registerSubclass("OD3_Monitoring_Slideshow", Monitoring_Slideshow);

