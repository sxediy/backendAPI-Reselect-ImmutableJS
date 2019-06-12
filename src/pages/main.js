import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_PICTURESDATA } from 'store/actionTypes';
import { Button } from 'components/Button/Button';

import { blue, bluelight, bluedark } from 'src/colors';
import styles from './Main.less';

const fetchURL = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';


const Main = ({ getPicturesData, picturesData }) => {
  useEffect(() => {
    getPicturesData(fetchURL);
  }, []);
  console.log('picturesData', picturesData);
  const url = picturesData ? picturesData.image_url : undefined;

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
          background = { blue }
        />
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <h1 className="home-header">Главная</h1>
      {url ? renderPicture() : null}
    </React.Fragment>
  );
};

Main.propTypes = {
  getPicturesData: PropTypes.func,
  picturesData: PropTypes.object,
};


const mapStateToProps = ({ pictures }) => (
  {
    picturesData: pictures.data
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getPicturesData: () => dispatch({ type: GET_PICTURESDATA, payload: fetchURL })
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Main);
