import React, { Fragment, useState } from 'react';
import { Icon, Empty, Pagination } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_PICTURE_FROM_HISTORY } from 'store/actionTypes';
import { getFilteredHistoryPictures, getCurrentYear } from 'selectors/historySelectors';
import styles from './History.less';

const History = ({ removePicture, historyPictures, currentYear }) => {
  const pageSize = 5;
  const [currentPage, setNewCurrentPage] = useState(1);
  const from = pageSize * (currentPage - 1);
  const to = pageSize * currentPage;
  const historyPicturesOnCurrentPage = historyPictures.slice(from, to);
  if (historyPicturesOnCurrentPage.length === 0 && currentPage > 1) {
    setNewCurrentPage(currentPage - 1);
  }

  const renderHistoryPic = () => (
    <Fragment>
      <h1 className="home-header">{`История за ${currentYear} год`}</h1>
      <div className={styles.historyContainer}>
        {
          historyPicturesOnCurrentPage
            .map(picture => (
              <div className={styles.picContainer} key={picture.id}>
                <div className={styles.imgContainer}>
                  <img align="left" src={picture.image_url} width="170px"/>
                  <Icon type="delete" onClick = {() => removePicture(picture.id)}/>
                </div>
                <div className={styles.textContainer}>
                  <h3>{picture.title}</h3>
                  <p>{picture.import_datetime}</p>
                </div>
              </div>
            ))
        }
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={historyPictures.length}
          hideOnSinglePage
          onChange={(newCurrentPage) => setNewCurrentPage(newCurrentPage)}
        />
      </div>
    </ Fragment>
  );

  const renderEmpty = () => (
    <div className={styles.emptyContainer}>
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        description={
          <span style={{ paddingLeft: '200px' }}>
            Нет картинок
          </span>
        } />
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      {historyPictures.length > 0 ? renderHistoryPic() : renderEmpty()}
    </div>
  );
};

History.propTypes = {
  removePicture: PropTypes.func,
  historyPictures: PropTypes.array,
  currentYear: PropTypes.string,
};


const mapStateToProps = (state) => ({
  historyPictures: getFilteredHistoryPictures(state),
  currentYear: getCurrentYear(state)
});

const mapDispatchToProps = (dispatch) => (
  {
    removePicture: (pictureID) => dispatch({ type: REMOVE_PICTURE_FROM_HISTORY, payload: pictureID })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(History);
