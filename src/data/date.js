export const date = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),

  displayDay: function () {
    return new Date(this.year, this.month, 1).getDay();
  },
  displayNumberOfDays: function () {
    return 32 - new Date(this.year, this.month, 32).getDate();
  },
};
