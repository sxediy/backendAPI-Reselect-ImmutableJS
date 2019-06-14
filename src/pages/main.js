import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REQUEST_CURRENT_PICTURE } from 'store/actionTypes';
import { Button } from 'components/Button/Button';

import { blue, bluelight, bluedark } from 'src/colors';
import styles from './Main.less';

const Main = ({ getPicture, currentPicData }) => {
  useEffect(() => {
    getPicture();
  }, []);
  const url = currentPicData ? currentPicData.image_url : undefined;

  const renderPicture = () => (
    <div className={styles.homeContainer}>
      <div className={styles.imgContainer}>
        <img align="left" src={url}/>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          buttonName={ 'Скачать' }
          customHoverBackground={ bluelight }
          customPressBackground={ bluedark }
          size={'s'}
          background={ blue }
          callbackFunction={ getPicture }
        />
      </div>
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <h1 className="home-header">Главная</h1>
      {url ? renderPicture() : null}
    </div>
  );
};

Main.propTypes = {
  getPicture: PropTypes.func,
  currentPicData: PropTypes.object,
};


const mapStateToProps = ({ currentPic }) => (
  {
    currentPicData: currentPic.data
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getPicture: () => dispatch({ type: REQUEST_CURRENT_PICTURE })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Main);
