const parseDate = (str: string) => {
  const dt: string[] = str.split('/');
  return new Date(Number(dt[2]), Number(dt[1]) - 1, Number(dt[0]));
};

const startDateLimit = parseDate('01/01/1901').getTime();
const endDateLimit = parseDate('31/12/2999').getTime();

const dateSortAsc = function (date1: Date, date2: Date) {
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

const validateDates = (date1: number, date2: number) => {
  if (
    date1 < startDateLimit ||
    date1 > endDateLimit ||
    date2 < startDateLimit ||
    date2 > endDateLimit
  ) {
    throw new Error('Please enter a date between 01/01/1901 and 31/12/2999');
  }
};

export const daysCalculator = (arg1: string, arg2: string): number => {
  const dateArr = [arg1, arg2].map(parseDate).sort(dateSortAsc);

  const startDate = dateArr[0];
  const endDate = dateArr[1].getTime();
  startDate.setDate(startDate.getDate() + 1);
  const startDateWithAdditionalDay = startDate.getTime();

  validateDates(startDateWithAdditionalDay, endDate);

  const numberOfMilliSecondsInDay = 24 * 60 * 60 * 1000;
  const differenceInDays =
    (endDate - startDateWithAdditionalDay) / numberOfMilliSecondsInDay;
  return differenceInDays;
};
