export const sortArray = (event) => {
  if (!event) return;
  event.sort((a, b) => {
    const dateA = parseInt(a.formattedDateToSort);
    const dateB = parseInt(b.formattedDateToSort);
    return dateA - dateB;
  });
  return event;
};
