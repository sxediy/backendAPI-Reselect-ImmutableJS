import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_PICTURE_FROM_HISTORY } from 'store/actionTypes';

import styles from './History.less';

const History = ({ removePicture, historyPictures }) => {
  const renderHistoryPic = () => (
    <div className={styles.historyContainer}>
      {
        historyPictures.map(picture => (
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
    </div>
  );

  return (
    <React.Fragment>
      <h1 className="home-header">История</h1>
      {Array.isArray(historyPictures) ? renderHistoryPic() : null}
    </React.Fragment>
  );
};

History.propTypes = {
  removePicture: PropTypes.func,
  historyPictures: PropTypes.array,
};


const mapStateToProps = ({ historyPictures }) => (
  {
    historyPictures
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    removePicture: (pictureID) => dispatch({ type: REMOVE_PICTURE_FROM_HISTORY, payload: pictureID })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(History);
