import {Text, TouchableOpacity, View} from 'react-native';
import {ViewStyle, StyleProp} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DividerLine from './DividerLine';
import React, {useState} from 'react';
import {GLOBALSTYLES} from '../globalStyles/GlobalStyles';
import {GLOBALCOLORS} from '../globalStyles/GlobalColors';
import RadioButton from './RadioButton';
interface AlertComponent {
  alertVisible: boolean;
  setAlertVisible: (value: boolean) => void;
  totalWords?: number;
  ViewStyle?: StyleProp<ViewStyle>;
  navigation?: any;
}
const Alert = ({
  ViewStyle,
  alertVisible,
  setAlertVisible,
  navigation,
}: AlertComponent) => {
  const data = [
    {id: 0, label: 'Japanese-English (N3)'},
    {id: 1, label: 'Spanish-English'},
  ];

  const [radioButtonSelected, setRadioButtonSelected] = useState<number>(0);

  return (
    <>
      {alertVisible ? (
        <View
          style={[
            GLOBALSTYLES.card,
            {
              backgroundColor: GLOBALCOLORS.white,
              position: 'absolute',
              borderRadius: 16,
              top: '50%',
              transform: [{translateY: -250 / 2}],
              right: 32,
              left: 32,
              borderWidth: 1,
              borderColor: GLOBALCOLORS.alert_border,
              padding: 0,
            },
          ]}>
          <View
            style={{
              justifyContent: 'center',
              paddingTop: 24,
            }}>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>
              Select a category
            </Text>
            <View style={{gap: 12, margin: 24}}>
              {data.map((e, key) => {
                return (
                  <RadioButton
                    isSelected={false}
                    label={e?.label}
                    id={e?.id}
                    radioButtonSelected={radioButtonSelected}
                    setRadioButtonSelected={setRadioButtonSelected}
                  />
                );
              })}
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{
                  flex: 1 / 2,
                  alignItems: 'center',
                  padding: 16,
                  borderTopWidth: 1,
                  borderColor: GLOBALCOLORS.border_Color,
                }}
                onPress={() => setAlertVisible(false)}>
                <Text
                  style={{
                    fontSize: 22,
                    color: GLOBALCOLORS.muted_Color,
                    fontWeight: '500',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1 / 2,
                  alignItems: 'center',
                  padding: 16,
                  borderTopWidth: 1,
                  borderLeftWidth: 1,
                  borderColor: GLOBALCOLORS.border_Color,
                }}
                onPress={() => {
                  navigation.navigate('TabScreen');
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: GLOBALCOLORS.primary_Color,
                    fontWeight: '500',
                  }}>
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};
export default Alert;
