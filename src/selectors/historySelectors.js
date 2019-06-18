import { createSelector } from 'reselect';

const getFilterByCurrentYear = state => (state.currentPic.data
  ? state.currentPic.data.import_datetime.slice(0, 4) : undefined);

const getHistoryPictures = state => state.historyPictures;

const getFilteredHistoryPictures = createSelector(
  [getFilterByCurrentYear, getHistoryPictures],
  (filterByYear, historyPictures) => (
    historyPictures.filter(pic => pic.import_datetime.slice(0, 4) === filterByYear)
  )
);

const getCurrentYear = createSelector(
  getFilterByCurrentYear, currentYear => currentYear
);

export { getFilteredHistoryPictures, getCurrentYear };
