import { date } from 'data/date';

export const initialDate = {
  year: date.year,
  month: date.monthName[date.month],
  monthIndex: date.month + 1,
  remoldedMonthName: date.remoldedMonthName[date.month],
};

export const initialInput = {
  title: '',
  time: '',
  description: '',
  comments: '',
  image: '',
};

export const editedInput = {
  title: '',
  time: '',
  description: '',
  comments: '',
};

export const initialConstant = {
  eventDate: '',
  formattedDateToSort: '',
  creationDate: '',
  creationHour: '',
  company: '',
  day: '',
};

export const initialEvent = { ...initialInput, ...initialConstant };

export const initialOpenState = {
  inputModal: false,
  editInputModal: false,
  removeModal: false,
  editModal: false,
  rightbarContainer: false,
};
