/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: WeekDays): boolean => {
  let res: boolean = false;
  switch (day) {
    case WeekDays.Monday:
    case WeekDays.Monday:
    case WeekDays.Monday:
    case WeekDays.Monday:
    case WeekDays.Monday: {
      res = true;
      break;
    }
    case WeekDays.Saturday:
    case WeekDays.Sunday: {
      res = false;
    }
  }
  return res;
};

export default isWeekend;
