import { createElement } from '../render.js';

function createTripPointsView() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripPointsView {
  getTemplate() {
    return createTripPointsView();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
