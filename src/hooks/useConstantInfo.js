import { useState } from 'react';
import { date } from 'data/date';

export const useConstantInfo = (initialConstant) => {
  const [constantInfo, setConstantInfo] = useState(initialConstant);

  const handleShowConstantInfo = (day, company) => {
    const creationDay = date.date < 10 ? `0${date.date}` : `${date.date}`;
    const creationMonth = date.month + 1 < 10 ? `0${date.month + 1}` : `${date.month + 1}`;
    const creationHour = date.hour < 10 ? `0${date.hour}` : `${date.hour}`;
    const creationMinute = date.minutes < 10 ? `0${date.minutes}` : `${date.minutes}`;

    setConstantInfo({
      eventDate: `${day} ${date.remoldedMonthName[date.month]} ${date.year}`,
      formattedDateToSort: `${date.year}${date.month + 1}${day}`,
      creationDate: `${creationDay}.${creationMonth}.${date.year}`,
      creationHour: `${creationHour}:${creationMinute}`,
      company,
      day,
    });
  };

  return {
    constantInfo,
    handleShowConstantInfo,
  };
};
