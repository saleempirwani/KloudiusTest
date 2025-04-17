import {Dimensions, StyleSheet} from 'react-native';
import {FlexAlignType} from 'react-native/types';
import {normalizeFont, pixelSizeX} from 'src/utils/sizes';

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
export const HORIZON_SPACE = pixelSizeX(20);

export const COLORS = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  primary: '#368904',
  red: '#EB4040',
  redLight: 'rgba(235, 64, 64, 0.1)',
  greyGreen: '#99AE8B',
  border: '#E8F1DF',
  grey: '#BDBDBD',
  leaveGreen: '#CBEEB3',
  lightGreen: '#E8F1DF',
  disabled: '#DCDCDC',
  zanah: '#E2EEDB',
  bgColor: '#EFF7EF',
};

// Typography
export const TYPOGRAPHY = StyleSheet.create<any>({
  h1: {
    fontSize: normalizeFont(30),
  },

  h2: {
    fontSize: normalizeFont(24),
  },

  h3: {
    fontSize: normalizeFont(18),
  },

  h4: {
    fontSize: normalizeFont(16),
  },

  h5: {
    fontSize: normalizeFont(14),
  },

  h6: {
    fontSize: normalizeFont(11),
  },

  body1: {
    fontSize: normalizeFont(18),
  },

  body2: {
    fontSize: normalizeFont(16),
  },

  body3: {
    fontSize: normalizeFont(14),
  },

  body4: {
    fontSize: normalizeFont(12),
  },
});

// RenderList Global Styles
export const STYLES = StyleSheet.create<any>({
  position: (position: number) => ({position}),
  left: (left: number) => ({left}),
  right: (right: number) => ({right}),
  top: (top: number) => ({top}),
  bottom: (bottom: number) => ({bottom}),
  margin: (margin: number) => ({margin}),
  mL: (marginLeft: number) => ({marginLeft}),
  mR: (marginRight: number) => ({marginRight}),
  mT: (marginTop: number) => ({marginTop}),
  mB: (marginBottom: number) => ({marginBottom}),
  mH: (marginHorizontal: number) => ({marginHorizontal}),
  mV: (marginVertical: number) => ({marginVertical}),
  padding: (padding: number) => ({padding}),
  pB: (paddingBottom: number) => ({paddingBottom}),
  pT: (paddingTop: number) => ({paddingTop}),
  pL: (paddingLeft: number) => ({paddingLeft}),
  pR: (paddingRight: number) => ({paddingRight}),
  pH: (paddingHorizontal: number) => ({paddingHorizontal}),
  pV: (paddingVertical: number) => ({paddingVertical}),
  height: (height: string | number = '0%') => ({height}),
  width: (width: string | number = '0%') => ({width}),
  color: (color: string) => ({color}),
  bgColor: (backgroundColor: string) => ({backgroundColor}),
  flex: (flex: number) => ({flex}),
  textTransform: (textTransform: any) => ({
    textTransform,
  }),
  textAlign: (align: string) => ({textAlign: align}),
  textDecorationLine: (textDecorationLine: string) => ({
    textDecorationLine: textDecorationLine,
  }),
  alignSelf: (alignSelf: FlexAlignType) => ({alignSelf}),
  fontSize: (fontSize: number) => ({fontSize}),
  fontStyle: (fontStyle: number) => ({fontStyle}),

  maxHeight: (maxHeight: number) => ({maxHeight}),
  borderWidth: (borderWidth: number) => ({borderWidth}),
  flexGrow: (flexGrow: number) => ({flexGrow}),
  widthHeight: (width = 0, height = 0) => ({width, height}),
  flexWrap: (wrap: string) => ({flexWrap: wrap}),
  fontFamily: (family: string) => ({fontFamily: family}),
  bR: (bR: number) => ({borderRadius: bR}),
  borderBottomRightRadius: (borderBottomRightRadius: number) => ({
    borderBottomRightRadius,
  }),
  borderBottomLeftRadius: (borderBottomLeftRadius: number) => ({
    borderBottomLeftRadius,
  }),
  minHeight: (minHeight: number) => ({minHeight}),
  borderColor: (borderColor: string) => ({borderColor}),

  fullWidth: {width: '100%'},
  JCStart: {justifyContent: 'flex-start'},
  JCEnd: {justifyContent: 'flex-end'},
  JCCenter: {justifyContent: 'center'},
  JCAround: {justifyContent: 'space-around'},
  JCBt: {justifyContent: 'space-between'},
  JCEvenly: {justifyContent: 'space-evenly'},
  AIStart: {alignItems: 'flex-start'},
  AIEnd: {alignItems: 'flex-end'},
  AICenter: {alignItems: 'center'},
  selfRight: {alignSelf: 'flex-end'},
  selfLeft: {alignSelf: 'flex-start'},
  selfCenter: {alignSelf: 'center'},
  row: {flexDirection: 'row'},
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  spbw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowCenterBt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  centerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  hitSlop: {
    top: 15,
    bottom: 15,
    right: 15,
    left: 15,
  },

  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  modalShadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },

  flex1: {flex: 1},
  jcStart: {justifyContent: 'flex-start'},

  width100: {
    width: '100%',
  },
});
