import TripFiltersList from '../view/trip-filters.js';
import { render } from '../render.js';


export default class TripFilterPresenter {
  filterComponent = new TripFiltersList();

  constructor({ sortContainer }) {
    this.sortContainer = sortContainer;
  }

  init() {
    render(this.filterComponent, this.sortContainer);
  }
}
