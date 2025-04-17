import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextStyle, ViewStyle} from 'react-native';
import {FlexAlignType, StyleProp} from 'react-native/types';
import {AppText} from 'src/components';

export type NavigationScreens =
  | 'AuthStack'
  | 'SignInScreen'
  | 'SignUpScreen'
  | 'HomeStack'
  | 'HomeScreen';

export type StackParamList = {
  AuthStack: {};
  SignInScreen: {};
  SignUpScreen: {};
  HomeStack: {};
  HomeScreen: {};
};

export type NavigationProps = NativeStackNavigationProp<StackParamList>;

export type FontFamily =
  | 'primaryBold'
  | 'primaryMedium'
  | 'primarySemi'
  | 'primaryRegular'
  | 'primaryItalic';

export type Typography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'body0'
  | 'body1'
  | 'body2'
  | 'body3';

export type FormNameKey = 'email' | 'password' | 'confirmPassword';

// AppButton
export type ButtonVariant = 'filled' | 'outlined';

export interface IAppButtonProps {
  onPress: () => void;
  width?: number;
  height?: number;
  title: string;
  variant?: ButtonVariant;
  extraStyle?: {button?: {}; title?: {}};
  SVGLeft?: any;
  SVGRight?: any;
}

// AppInput

// export interface ISVGProps {
//   width?: number;
//   height?: number;
//   fill?: string;
// }

export interface IExtraStyle {
  container?: ViewStyle;
  textInput?: TextStyle;
  iconCont?: ViewStyle;
}

export interface IAppInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  onPressIcon?: () => void;
  mH?: boolean;
  editable?: boolean;
  SVGLeft?: any;
  SVGRight?: any;
  autoFocus?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  extraStyle?: IExtraStyle;
  error?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
}

AppText;

export interface IAppTextProps extends TextStyle {
  title: string;
  variant: Typography;
  onPress?: () => void;
  extraStyle?: StyleProp<TextStyle>;
  children?: any;
  color?: string;
  alignSelf?: FlexAlignType;
  fontSize?: number;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  translation?: boolean;
  fontFamily?: null | FontFamily;
}

// Container
export interface IContainerProps {
  children: React.ReactElement;
  extraStyle?: ViewStyle;
  mH?: boolean;
}

// Space
export interface ISpaceProps {
  mT?: number;
  mB?: number;
  mR?: number;
  mL?: number;
  mH?: number;
  mV?: number;
  children?: any;
}
