import questions, { validateDateFormat } from '../src/questions';
import inquirer from 'inquirer';

jest.mock('inquirer');

const mockedInquirer = inquirer as jest.Mocked<typeof inquirer>;

describe('test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return user answers', async () => {
    mockedInquirer.prompt.mockResolvedValue({ fromDate: '', toDate: '' });
    const response = await questions.askForDates();
    expect(response).toEqual({ fromDate: '', toDate: '' });
    expect(mockedInquirer.prompt).toHaveBeenCalledTimes(1);
  });

  it('should return true for valid date format DD/MM/YYYY', () => {
    const response = validateDateFormat('12/01/2000');
    expect(response).toBeTruthy();
  });

  it('should return error message for invalid date format YYYY/MM/DD', () => {
    const response = validateDateFormat('1200/01/20');
    expect(response).toEqual('Please enter a valid date in format dd/mm/yyyy');
  });

  it('should return error message for invalid date format MM/DD/YYYY', () => {
    const response = validateDateFormat('10/23/2000');
    expect(response).toEqual('Please enter a valid date in format dd/mm/yyyy');
  });
});
