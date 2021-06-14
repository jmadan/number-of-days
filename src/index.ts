import questions from './questions';

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

const validateDates = (fromDate: number, toDate: number) => {
  if (
    fromDate < startDateLimit ||
    fromDate > endDateLimit ||
    toDate < startDateLimit ||
    toDate > endDateLimit
  ) {
    throw new Error('Please enter a date between 01/01/1901 and 31/12/2999');
  }
};

export const daysCalculator = async (): Promise<number> => {
  const dates = await questions.askForDates();
  const dateArr = [dates.fromDate, dates.toDate]
    .map(parseDate)
    .sort(dateSortAsc);

  if (dateArr[0].getTime() == dateArr[1].getTime()) {
    return 0;
  }

  const startDate = dateArr[0];
  const endDate = dateArr[1].getTime();
  startDate.setDate(startDate.getDate() + 1);
  const startDateWithAdditionalDay = startDate.getTime();

  validateDates(startDateWithAdditionalDay, endDate);

  const numberOfMilliSecondsInDay = 24 * 60 * 60 * 1000;
  const differenceInDays = Math.round(
    (endDate - startDateWithAdditionalDay) / numberOfMilliSecondsInDay,
  );
  console.log(`Number of days between 2 dates are ${differenceInDays} day(s)`);
  return differenceInDays;
};
