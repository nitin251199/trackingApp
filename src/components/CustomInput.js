import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Animated} from 'react-native';
import {Color, Fonts} from '../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InputField = React.forwardRef((props, ref) => {
  const {
    label,
    icon,
    inputType,
    keyboardType,
    fieldButton,
    fieldButtonFunction,
    onChangeText,
    value,
    editable,
    secure,
    setSecure,
    activeOutlineColor,
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        borderBottomColor: isFocused ? activeOutlineColor : '#000',
        borderBottomWidth: isFocused ? 1 : 0.5,
        backgroundColor: '#aaaaaa50',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      }}>
      {icon}
      {inputType == 'password' ? (
        <View
          style={{
            flex: 1,
            paddingVertical: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            ref={ref}
            placeholder={label}
            placeholderTextColor="#999"
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              fontFamily: Fonts.primaryRegular,
              paddingHorizontal: 10,
              paddingVertical: 7,
              color: '#000',
              flex: 1,
            }}
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
            <MaterialCommunityIcons
              name={secure ? 'eye-off' : 'eye'}
              color={'#999'}
              size={23}
              style={{
                paddingHorizontal: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            paddingVertical: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            ref={ref}
            placeholder={label}
            editable={editable}
            placeholderTextColor="#999"
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            
            style={{
              fontFamily: Fonts.primaryRegular,
              textDecorationLine: 'none',
              paddingHorizontal: 10,
              paddingVertical: 7,
              flex: 1,
              color: '#000',
            }}
          />
          <TouchableOpacity onPress={fieldButtonFunction}>
            {fieldButton}
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
});

export default InputField;

// export default function InputField({
//   label,
//   icon,
//   inputType,
//   keyboardType,
//   fieldButton,
//   fieldButtonFunction,
//   onChangeText,
//   value,
//   editable,
//   secure,
//   setSecure,
//   activeOutlineColor,
// }) {
//   const [isFocused, setIsFocused] = React.useState(false);

//   return (
//     <Animated.View
//       style={{
//         flexDirection: 'row',
//         borderBottomColor: isFocused ? activeOutlineColor : '#000',
//         borderBottomWidth: isFocused ? 1 : 0.5,
//         backgroundColor: '#aaaaaa50',
//         borderTopLeftRadius: 4,
//         borderTopRightRadius: 4,
//       }}>
//       {icon}
//       {inputType == 'password' ? (
//         <View
//           style={{
//             flex: 1,
//             paddingVertical: 0,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <TextInput
//             placeholder={label}
//             placeholderTextColor="#999"
//             keyboardType={keyboardType}
//             onChangeText={onChangeText}
//             value={value}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//             style={{
//               fontFamily: Fonts.primaryRegular,
//               paddingHorizontal: 10,
//               paddingVertical: 7,
//               color: '#000',
//               flex: 1,
//             }}
//             secureTextEntry={secure}
//           />
//           <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
//             <MaterialCommunityIcons
//               name={secure ? 'eye-off' : 'eye'}
//               color={'#999'}
//               size={23}
//               style={{
//                 paddingHorizontal: 15,
//               }}
//             />
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View
//           style={{
//             flex: 1,
//             paddingVertical: 0,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <TextInput
//             placeholder={label}
//             editable={editable}
//             placeholderTextColor="#999"
//             keyboardType={keyboardType}
//             onChangeText={onChangeText}
//             value={value}
//             onFocus={() => setIsFocused(true)}
//             onBlur={() => setIsFocused(false)}
//             style={{
//               fontFamily: Fonts.primaryRegular,
//               textDecorationLine: 'none',
//               paddingHorizontal: 10,
//               paddingVertical: 7,
//               flex: 1,
//               color: '#000',
//             }}
//           />
//           <TouchableOpacity onPress={fieldButtonFunction}>
//             {fieldButton}
//           </TouchableOpacity>
//         </View>
//       )}
//     </Animated.View>
//   );
// }
