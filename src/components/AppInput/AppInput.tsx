import {Fragment, useState} from 'react';
import {TextInput, View} from 'react-native';
import {COLORS, STYLES} from 'src/theme';
import {IAppInputProps} from 'src/types';
import {styles} from './styles';
import AppText from '../AppText/AppText';
import Feather from 'react-native-vector-icons/Feather';

const AppInput: React.FC<IAppInputProps> = props => {
  const {
    multiline = false,
    SVGLeft = null,
    SVGRight = null,
    numberOfLines = 1,
    extraStyle = {container: {}, textInput: {}, iconCont: {}},
    value = '',
    editable = true,
    autoFocus = false,
    secureTextEntry = false,
    placeholder = '',
    keyboardType = 'default',
    onChangeText = () => {},
    onPressIcon = () => {},
    error,
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const renderRightIcon = () => {
    if (secureTextEntry) {
      return (
        <Feather
          name={showPassword ? 'eye' : 'eye-off'}
          onPress={onPasswordToggle}
          size={20}
          style={[STYLES.mH(15)]}
        />
      );
    } else if (SVGRight) {
      return SVGRight;
    } else {
      return <View style={[STYLES.mR(15)]} />;
    }
  };

  return (
    <Fragment>
      <View
        style={[
          styles.textInputCont,
          STYLES.maxHeight(multiline ? 150 : 45),
          STYLES.minHeight(multiline ? 150 : 45),
          !multiline && STYLES.rowCenterBt,
          extraStyle.container,
        ]}>
        {SVGLeft && <View style={[STYLES.mR(10)]}>{SVGLeft}</View>}

        <TextInput
          {...props}
          placeholder={placeholder}
          autoFocus={autoFocus}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={COLORS.greyGreen}
          selectionColor={COLORS.black}
          keyboardType={keyboardType}
          style={[
            styles.textInput,
            STYLES.pT(multiline ? 15 : 0),
            extraStyle.textInput,
          ]}
          {...(secureTextEntry && {secureTextEntry: !showPassword})}
        />
        {renderRightIcon()}
      </View>
      {error && (
        <AppText
          title={error}
          variant="body3"
          color={COLORS.red}
          extraStyle={[STYLES.mT(5)]}
        />
      )}
    </Fragment>
  );
};

export default AppInput;
