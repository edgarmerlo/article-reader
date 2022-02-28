import xss from "xss";

export class SanitizerService {
  static sanitizeString(data: string): string {
    return xss(data);
  }
}