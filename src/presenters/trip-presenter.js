import TripSortList from '../view/trip-sort.js';
import TripPointsView from '../view/trip-points-view.js';
import TripPointsList from '../view/trip-points-list.js';
import TripPointAddNew from '../view/trip-point-add-new.js';
import { TRIP_COUNT } from '../constants.js';
import { render } from '../render.js';


export default class TripPresenter {
  sortComponent = new TripSortList();
  pointComponent = new TripPointsView();

  constructor({ sortContainer }) {
    this.sortContainer = sortContainer;
  }

  init() {
    render(this.sortComponent, this.sortContainer);
    render(this.pointComponent, this.sortContainer);
    render(new TripPointAddNew(), this.pointComponent.getElement());
    for (let i = 0; i < TRIP_COUNT; i++) {
      render(new TripPointsList(), this.pointComponent.getElement());
    }
  }
}
