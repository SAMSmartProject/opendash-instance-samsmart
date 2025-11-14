import Parse from "parse";

import type { Source } from "./Source";
import type { _User } from "./_User";

export interface ReportAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string | undefined;
  icon?: string | undefined;
  iconColor: string;
  images: any[];
  items: any[];
  language?: string | undefined;
  masterData: any;
  name?: string | undefined;
  options: any;
  source?: Source | undefined;
  template: Parse.File;
  title?: string | undefined;
  type: string;
  user: _User;
}

export class Report extends Parse.Object<ReportAttributes> {
  static className: string = "OD3_Report";

  constructor(data?: Partial<ReportAttributes>) {
    super("OD3_Report", data as ReportAttributes);
  }

  get description(): string | undefined {
    return super.get("description");
  }
  set description(value: string | undefined) {
    super.set("description", value);
  }

  get icon(): string | undefined {
    return super.get("icon");
  }
  set icon(value: string | undefined) {
    super.set("icon", value);
  }

  get iconColor(): string {
    return super.get("iconColor");
  }
  set iconColor(value: string) {
    super.set("iconColor", value);
  }

  get images(): any[] {
    return super.get("images");
  }
  set images(value: any[]) {
    super.set("images", value);
  }

  get items(): any[] {
    return super.get("items");
  }
  set items(value: any[]) {
    super.set("items", value);
  }

  get language(): string | undefined {
    return super.get("language");
  }
  set language(value: string | undefined) {
    super.set("language", value);
  }

  get masterData(): any {
    return super.get("masterData");
  }
  set masterData(value: any) {
    super.set("masterData", value);
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

  get source(): Source | undefined {
    return super.get("source");
  }
  set source(value: Source | undefined) {
    super.set("source", value);
  }

  get template(): Parse.File {
    return super.get("template");
  }
  set template(value: Parse.File) {
    super.set("template", value);
  }

  get title(): string | undefined {
    return super.get("title");
  }
  set title(value: string | undefined) {
    super.set("title", value);
  }

  get type(): string {
    return super.get("type");
  }
  set type(value: string) {
    super.set("type", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Report", Report);

