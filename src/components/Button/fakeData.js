import * as ivan from 'src/colors';


const buttonName = 'Кнопка';
const size = 'l';
const textSize = '24px';

const callbackFunction = () => console.log('Что-то произошло после нажатия');


const background = ivan.mandarin;
const textColor = ivan.fullBlack;
const isDarkness = true;
const isDisabled = true;


const boxShadow = '1px 1px 10px rgba(51, 51, 51, 0.2)';
const border = `1px solid ${ivan.fury}`;


export {
  buttonName,
  callbackFunction,
  size,
  background,
  border,
  boxShadow,
  isDisabled,
  textColor,
  textSize,
  isDarkness,
};
