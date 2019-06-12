import * as ivan from 'src/colors';

const makeBorder = (isDarkness, backgroundColor, initialBorder) => (
  isDarkness && backgroundColor === ivan.freshAsphalt ? initialBorder : 'none'
);


const makeDisableBackground = (isDarkness, initialBackground) => {
  if (!isDarkness) return ivan.SPbSky2;
  if (isDarkness && initialBackground === ivan.freshAsphalt) return ivan.freshAsphalt;
  return ivan.SPbSky1;
};


const makeOpacity = (initialBackground, isDarkness, isDisabled) => {
  const shellOpacity = isDarkness && isDisabled && initialBackground === ivan.freshAsphalt ? '0.5' : '1';
  const textOpacity = isDarkness && isDisabled ? '0.5' : '1';
  return [shellOpacity, textOpacity];
};

const defaultBorder = `1px solid ${ivan.fullWhite}`;
const styleHelper = ({
  size = 'm',
  border: initialBorder = defaultBorder,
  isDarkness,
  isDisabled = false,
  initialBackground,
  initialTextColor,
  textSize: fontSize = '15px',
  currentBackground,
  currentBoxShadow,
  currentTextColor,
}) => {
  const height = {
    s: '36px',
    m: '48px',
    l: '60px',
  }[size];

  const width = {
    s: '168px',
    m: '200px',
    l: '200px',
  }[size];


  const backgroundColor = isDisabled ? makeDisableBackground(isDarkness, initialBackground) : currentBackground;

  const border = makeBorder(isDarkness, backgroundColor, initialBorder);
  const boxShadow = isDisabled ? 'none' : currentBoxShadow;
  const cursor = isDisabled ? 'not-allowed' : 'pointer';
  const pointerEvents = 'auto';

  const [shellOpacity, textOpacity] = makeOpacity(initialBackground, isDarkness, isDisabled);

  const shellStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width,
    backgroundColor,
    boxShadow,
    border,
    opacity: shellOpacity,
    borderRadius: '100px',
    padding: '2%',
    cursor,
    pointerEvents,
    position: 'relative',
  };

  const color = isDisabled ? initialTextColor : currentTextColor;

  const lineHeight = `${parseInt(height, 10) / 2}px`;

  const textStyle = {
    fontSize,
    color,
    opacity: textOpacity,
    lineHeight,
  };

  return [shellStyle, textStyle];
};


export { styleHelper };
