
import * as ivan from 'src/colors';

const makeHoverBackground = (initialBackground) => (
  initialBackground === ivan.violet ? ivan.hoverViolet : ivan.hoverGreen
);


const makeDownBackground = (isDarkness) => (
  isDarkness ? ivan.freshAsphalt : ivan.buttonDown
);


// нажал
const onMouseDown = ({
  isDarkness,
  initialBoxShadow,
  setNewBackground,
  setNewBoxShadow,
  setNewTextColor,
  customPressBackground,
}) => () => {
  const downBackground = customPressBackground || makeDownBackground(isDarkness);
  setNewBackground(downBackground);
  setNewBoxShadow(initialBoxShadow);
  setNewTextColor(ivan.fullWhite);
};

// отпустил
const onMouseUp = ({
  initialBackground,
  initialTextColor,
  setNewBackground,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  setNewBackground(initialBackground);
  setNewBoxShadow('none');
  setNewTextColor(initialTextColor);
};

// навёл
const onMouseOver = ({
  initialBackground,
  setNewBackground,
  setNewBoxShadow,
  setNewTextColor,
  customHoverBackground
}) => () => {
  const hoverBackground = customHoverBackground || makeHoverBackground(initialBackground);
  setNewBackground(hoverBackground);
  setNewBoxShadow('none');
  setNewTextColor(ivan.fullWhite);
};

// увёл
const onMouseOut = ({
  initialBackground,
  initialTextColor,
  setNewBackground,
  setNewBoxShadow,
  setNewTextColor
}) => () => {
  setNewBackground(initialBackground);
  setNewBoxShadow('none');
  setNewTextColor(initialTextColor);
};

export {
  onMouseDown,
  onMouseUp,
  onMouseOver,
  onMouseOut
};
