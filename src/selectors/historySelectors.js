import { createSelector } from 'reselect';

const getFilterByCurrentYear = state => (state.get('currentPic').get('data')
  ? state.get('currentPic').get('data').import_datetime.slice(0, 4) : undefined);


const getHistoryPictures = state => state.get('historyPictures');

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
