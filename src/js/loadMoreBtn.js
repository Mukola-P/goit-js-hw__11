export default class LoadMoreBtn {
  constructor({ selector }) {
    this.button = document.querySelector(selector);
  }

  showBtn() {
    this.button.classList.remove('is-hidden');
  }

  hideBtn() {
    this.button.classList.add('is-hidden');
  }
}
