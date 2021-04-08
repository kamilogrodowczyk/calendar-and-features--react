export const date = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  days: ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'],
  monthName: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
  yearList: [2022, 2021, 2020, 2019, 2018],

  displayDay: function () {
    return new Date(this.year, this.month, 1).getDay();
  },
  displayNumberOfDays: function () {
    return 32 - new Date(this.year, this.month, 32).getDate();
  },
};
