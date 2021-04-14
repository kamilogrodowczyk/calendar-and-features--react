export const date = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDay(),
  date: new Date().getDate(),
  days: ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'],
  monthName: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
  yearList: [2022, 2021, 2020, 2019, 2018],

  displayDay(year, month) {
    if (new Date(year, month, 1).getDay() === 0) {
      return 7;
    }
    return new Date(year, month, 1).getDay();
  },
  displayNumberOfDays(month) {
    const arr = [];
    const displayDays = [...Array(32 - new Date(this.year, month, 32).getDate())];
    displayDays.forEach((el, i) => {
      el = i + 1;
      arr.push(el);
    });

    return arr;
  },
};
