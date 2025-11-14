import Parse from "parse";

export interface MailTemplateAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  disclaimer?: string | undefined;
  language: string;
  template: string;
  type: string;
  watermark?: string | undefined;
}

export class MailTemplate extends Parse.Object<MailTemplateAttributes> {
  static className: string = "OD3_MailTemplate";

  constructor(data?: Partial<MailTemplateAttributes>) {
    super("OD3_MailTemplate", data as MailTemplateAttributes);
  }

  get disclaimer(): string | undefined {
    return super.get("disclaimer");
  }
  set disclaimer(value: string | undefined) {
    super.set("disclaimer", value);
  }

  get language(): string {
    return super.get("language");
  }
  set language(value: string) {
    super.set("language", value);
  }

  get template(): string {
    return super.get("template");
  }
  set template(value: string) {
    super.set("template", value);
  }

  get type(): string {
    return super.get("type");
  }
  set type(value: string) {
    super.set("type", value);
  }

  get watermark(): string | undefined {
    return super.get("watermark");
  }
  set watermark(value: string | undefined) {
    super.set("watermark", value);
  }
}

Parse.Object.registerSubclass("OD3_MailTemplate", MailTemplate);

