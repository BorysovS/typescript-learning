/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekend {
  Monday = "MONDAY",
  Tuessday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

function isWeekend(day: string): boolean {
  if (
    day.toLowerCase() === Weekend.Sunday.toLowerCase() ||
    day.toLowerCase() === Weekend.Saturday.toLowerCase()
  ) {
    return true;
  }
  return false;
}

const today: string = "sunday";
const wekDay: boolean = isWeekend(today);
console.log(wekDay);
