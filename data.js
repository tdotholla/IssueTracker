export const data = [
  { date: "12/01/2019", total: 0, fixed: 0, get remaining() {
    return this.total - this.fixed
  } },
  { date: "01/02/2020", total: 203, fixed: 1, get remaining() {
    return this.total - this.fixed
  } },
  { date: "01/09/2020", total: 598, fixed: 106, get remaining() {
    return this.total - this.fixed
  } },
  { date: "01/15/2020", total: 1321, fixed: 118, get remaining() {
    return this.total - this.fixed
  } }
];
