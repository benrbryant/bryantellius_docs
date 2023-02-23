class InputSource {}
class Fields {
  getReplyToValue(): string {
    return "replyTo";
  }
}
class SMTPConnection {}

abstract class Mail {
  contentTypeHeader: string;
  replyTo: string;

  getText(source: InputSource) {}

  public abstract applyHeaders(): void;

  public fillAddressFields(fields: Fields) {}

  public authSMTP(user: string, password: string, method: string) {}

  public sendMailUsingSMTP(conn: SMTPConnection) {}

  public sendMail() {
    this.getText(new InputSource());
    this.applyHeaders();
    this.fillAddressFields(new Fields());
    this.authSMTP("bbryant", "password", "MD5");
    this.sendMailUsingSMTP(new SMTPConnection());
  }
}

class PlainTextMail extends Mail {
  public applyHeaders(): void {
    this.contentTypeHeader = "text/plain";
  }
}

class HTMLMail extends Mail {
  public applyHeaders(): void {
    this.contentTypeHeader = "text/plain";
  }

  public fillAddressFields(fields: Fields): void {
    this.replyTo = fields.getReplyToValue();
  }
}
