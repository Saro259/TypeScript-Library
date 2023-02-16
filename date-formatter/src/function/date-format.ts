

export class Module {

  constructor(public lastUpdated: Date) {}
  getUpdatedTime(): String {
      let options: Intl.DateTimeFormatOptions = {
          day: "numeric", month: "numeric", year: "numeric"};
      return this.lastUpdated.toLocaleDateString();
  }
}
