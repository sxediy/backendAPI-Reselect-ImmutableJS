import React, { Fragment } from 'react';
import { Icon, Empty } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVE_PICTURE_FROM_HISTORY } from 'store/actionTypes';

import styles from './History.less';

const History = ({ removePicture, historyPictures }) => {
  const renderHistoryPic = () => (
    <Fragment>
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
      <h1 className="home-header">История</h1>
      {historyPictures.length > 0 ? renderHistoryPic() : renderEmpty()}
    </div>
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
