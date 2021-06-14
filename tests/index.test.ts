import { daysCalculator } from '../src/index';
import inquirer from 'inquirer';
jest.mock('inquirer');
const mockedInquirer = inquirer as jest.Mocked<typeof inquirer>;

describe('Number of Days between dates', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should throw error if startDate is less than acceptable startDate', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '01/01/1900',
      toDate: '01/01/2020',
    });
    expect.assertions(1);
    try {
      await daysCalculator();
    } catch (err) {
      expect(err).toEqual(
        new Error('Please enter a date between 01/01/1901 and 31/12/2999'),
      );
    }
  });

  it('should throw error if startDate is greater than acceptable endDate', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '01/01/3000',
      toDate: '01/01/2020',
    });
    expect.assertions(1);
    try {
      await daysCalculator();
    } catch (err) {
      expect(err).toEqual(
        new Error('Please enter a date between 01/01/1901 and 31/12/2999'),
      );
    }
  });

  it('should throw error if endDate is less than acceptable startDate', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '01/01/1902',
      toDate: '01/01/1900',
    });
    expect.assertions(1);
    try {
      await daysCalculator();
    } catch (err) {
      expect(err).toEqual(
        new Error('Please enter a date between 01/01/1901 and 31/12/2999'),
      );
    }
  });

  it('should throw error if endDate is greater than acceptable endDate', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '01/01/1902',
      toDate: '01/01/3000',
    });
    expect.assertions(1);
    try {
      await daysCalculator();
    } catch (err) {
      expect(err).toEqual(
        new Error('Please enter a date between 01/01/1901 and 31/12/2999'),
      );
    }
  });

  it('should return correct number of days in difference between 2 dates', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '02/06/1983',
      toDate: '22/06/1983',
    });
    const response = await daysCalculator();
    expect(response).toEqual(19);
  });

  it('should return 0 days in difference between 2 consecutive dates', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '02/06/1983',
      toDate: '03/06/1983',
    });
    const response = await daysCalculator();
    expect(response).toEqual(0);
  });

  it('should return 1 day in difference between 2 dates with one day difference in them', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '02/06/1983',
      toDate: '04/06/1983',
    });
    const response = await daysCalculator();
    expect(response).toEqual(1);
  });

  it('should return correct number of days even with dates in wrong order', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '22/06/1983',
      toDate: '02/06/1983',
    });
    const response = await daysCalculator();
    expect(response).toEqual(19);
  });

  it('should return 0 days in difference for same dates', async () => {
    mockedInquirer.prompt.mockResolvedValue({
      fromDate: '02/06/1983',
      toDate: '02/06/1983',
    });
    const response = await daysCalculator();
    expect(response).toEqual(0);
  });
});
