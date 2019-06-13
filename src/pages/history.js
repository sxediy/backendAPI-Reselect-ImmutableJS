import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_PICTURE_FROM_HISTORY } from 'store/actionTypes';

import styles from './History.less';

const History = ({ removePicture, historyPic }) => {
  console.log('historyPic', historyPic);
  const renderHistoryPic = () => (
    <div className={styles.historyContainer}>
      {
        historyPic.map(pic => (
          <div className={styles.picContainer} key={pic.id}>
            <div className={styles.imgContainer}>
              <img align="left" src={pic.image_url} width="170px"/>
            </div>
            <div className={styles.textContainer}>
              <h3>{pic.title}</h3>
              <p>{pic.import_datetime}</p>
            </div>
          </div>
        ))
      }
    </div>
  );

  console.log('removePicture', removePicture);

  return (
    <React.Fragment>
      <h1 className="home-header">История</h1>
      {Array.isArray(historyPic) ? renderHistoryPic() : null}
    </React.Fragment>
  );
};

History.propTypes = {
  removePicture: PropTypes.func,
  historyPic: PropTypes.array,
};


const mapStateToProps = ({ historyPic }) => (
  {
    historyPic
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    removePicture: () => dispatch({ type: REMOVE_PICTURE_FROM_HISTORY })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(History);
