import Parse from "parse";

import type { _User } from "./_User";

export interface AttachmentAttributes {
  id: string;
  objectId: string;
  createdAt: Date;
  updatedAt: Date;
  file: Parse.File;
  label: string;
  user: _User;
}

export class Attachment extends Parse.Object<AttachmentAttributes> {
  static className: string = "OD3_Attachment";

  constructor(data?: Partial<AttachmentAttributes>) {
    super("OD3_Attachment", data as AttachmentAttributes);
  }

  get file(): Parse.File {
    return super.get("file");
  }
  set file(value: Parse.File) {
    super.set("file", value);
  }

  get label(): string {
    return super.get("label");
  }
  set label(value: string) {
    super.set("label", value);
  }

  get user(): _User {
    return super.get("user");
  }
  set user(value: _User) {
    super.set("user", value);
  }
}

Parse.Object.registerSubclass("OD3_Attachment", Attachment);

