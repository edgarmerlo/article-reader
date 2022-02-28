export class DateTimeService {
  static getDateFromString(date: string): string {
    const formatedDate = new Date(date);
    const year = formatedDate.getFullYear();
    let day: string | number = formatedDate.getDate();
    let month: string | number = formatedDate.getMonth() + 1;
    day = day >= 10 ? day : `0${day}`;
    month = month >= 10 ? month : `0${month}`;
    return `${day} / ${month} / ${year}`;
  }
}