import { prompt } from 'inquirer';

interface UserInput {
  fromDate: string;
  toDate: string;
}

export const validateDateFormat = (dt: string): string | boolean => {
  const pass = dt.match(
    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
  );
  if (pass) {
    return true;
  }
  return 'Please enter a valid date in format dd/mm/yyyy';
};

const questions = [
  {
    type: 'input',
    name: 'fromDate',
    message: 'Please enter initial date: ',
    validate: validateDateFormat,
  },
  {
    type: 'input',
    name: 'toDate',
    message: 'Please enter final date: ',
    validate: validateDateFormat,
  },
];

export default {
  askForDates: async (): Promise<UserInput> => {
    return prompt(questions);
  },
};
