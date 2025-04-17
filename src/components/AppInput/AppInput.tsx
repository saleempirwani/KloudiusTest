import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {COLORS, STYLES} from 'src/theme';
import {IAppInputProps} from 'src/types';
import {styles} from './styles';

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
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const renderRightIcon = () => {
    return null;
    // if (secureTextEntry) {
    //   return (
    //     <Icon
    //       SVGIcon={
    //         showPassword ? (
    //           <SVG.EyeOpen fill={COLORS.grey} />
    //         ) : (
    //           <SVG.EyeClose fill={COLORS.grey} />
    //         )
    //       }
    //       iconLeft={false}
    //       onPress={onPasswordToggle}
    //       alignSelf="center"
    //       extraStyle={{
    //         container: {...styles.iconCont, ...extraStyle.iconCont},
    //       }}
    //     />
    //   );
    // } else if (SVGRight) {
    //   return (
    //     <Icon
    //       mR={0}
    //       SVGIcon={SVGRight}
    //       onPress={onPressIcon}
    //       alignSelf="center"
    //       extraStyle={{
    //         container: {...styles.iconCont, ...extraStyle.iconCont},
    //       }}
    //     />
    //   );
    // } else {
    //   return <View style={[STYLES.mR(15)]} />;
    // }
  };

  return (
    <View
      style={[
        styles.textInputCont,
        STYLES.maxHeight(multiline ? 150 : 45),
        STYLES.minHeight(multiline ? 150 : 45),
        !multiline && STYLES.rowCenterBt,
        extraStyle.container,
      ]}>
      {/* {SVGLeft && (
        <Icon
          SVGIcon={SVGLeft}
          onPress={onPressIcon}
          alignSelf="center"
          extraStyle={{
            container: {...styles.iconCont, ...extraStyle.iconCont},
          }}
        />
      )} */}

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
  );
};

export default AppInput;
