import TripInfoPresenter from './presenter/trip-info-presenter.js';
import TripPresenter from './presenter/trip-presenter.js';
import TripFilterPresenter from './presenter/trip-filters-presenter.js';

const siteBodyElement = document.querySelector('.page-body');
const siteTripInfoElement = siteBodyElement.querySelector('.trip-main');
const siteFilterElement = siteBodyElement.querySelector('.trip-controls__filters');
const siteContentElement = siteBodyElement.querySelector('.trip-events');
const tripPresenter = new TripPresenter({sortContainer: siteContentElement});
const tripFilterPresenter = new TripFilterPresenter({sortContainer: siteFilterElement});
const tripInfoPresenter = new TripInfoPresenter({sortContainer: siteTripInfoElement});


tripInfoPresenter.init();
tripPresenter.init();
tripFilterPresenter.init();
