export const data = [
  { date: "12/01/2019", tagsTotal: 0, tagsFixed: 0, get tagsRemaining() {
    return this.tagsTotal - this.tagsFixed
  } },
  { date: "01/02/2020", tagsTotal: 203, tagsFixed: 1, get tagsRemaining() {
    return this.tagsTotal - this.tagsFixed
  } },
  { date: "01/09/2020", tagsTotal: 598, tagsFixed: 106, get tagsRemaining() {
    return this.tagsTotal - this.tagsFixed
  } },
  { date: "01/16/2020", tagsTotal: 1321, tagsFixed: 118, get tagsRemaining() {
    return this.tagsTotal - this.tagsFixed
  } },
  { date: "01/23/2020", tagsTotal: 1675, tagsFixed: 151, get tagsRemaining() {
    return this.tagsTotal - this.tagsFixed
  } },
  { date: "01/30/2020", tagsTotal: 1908, tagsFixed: 154, get tagsRemaining() {
    return this.tagsTotal - this.tagsFixed
  } }
];
