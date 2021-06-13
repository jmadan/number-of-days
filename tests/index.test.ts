import { daysCalculator } from '../src/index';

describe('Number of Days between dates', () => {
  it('should throw error if startDate is less than acceptable startDate', () => {
    const startDate = '01/01/1900';
    const endDate = '2';
    expect(() => daysCalculator(startDate, endDate)).toThrow(
      'Please enter a date between 01/01/1901 and 31/12/2999',
    );
  });

  it('should throw error if startDate is greater than acceptable endDate', () => {
    const startDate = '01/01/3000';
    const endDate = '2';
    expect(() => daysCalculator(startDate, endDate)).toThrow(
      'Please enter a date between 01/01/1901 and 31/12/2999',
    );
  });

  it('should throw error if endDate is less than acceptable startDate', () => {
    const startDate = '01/01/1902';
    const endDate = '01/01/1900';
    expect(() => daysCalculator(startDate, endDate)).toThrow(
      'Please enter a date between 01/01/1901 and 31/12/2999',
    );
  });

  it('should throw error if endDate is greater than acceptable endDate', () => {
    const startDate = '01/01/1902';
    const endDate = '01/01/3000';
    expect(() => daysCalculator(startDate, endDate)).toThrow(
      'Please enter a date between 01/01/1901 and 31/12/2999',
    );
  });

  it('should return correct number of days in difference between 2 dates', () => {
    const startDate = '02/06/1983';
    const endDate = '22/06/1983';
    const response = daysCalculator(startDate, endDate);
    expect(response).toEqual(19);
  });

  it('should return 0 days in difference between 2 consecutive dates', () => {
    const startDate = '02/06/1983';
    const endDate = '03/06/1983';
    const response = daysCalculator(startDate, endDate);
    expect(response).toEqual(0);
  });

  it('should return 1 day in difference between 2 dates with one day difference in them', () => {
    const startDate = '02/06/1983';
    const endDate = '04/06/1983';
    const response = daysCalculator(startDate, endDate);
    expect(response).toEqual(0);
  });

  it('should return correct number of days even with dates in wrong order', () => {
    const startDate = '02/06/1983';
    const endDate = '22/06/1983';
    const response = daysCalculator(endDate, startDate);
    expect(response).toEqual(19);
  });
});
