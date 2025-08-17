import {Text, TouchableOpacity, View} from 'react-native';
import {ViewStyle, StyleProp} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DividerLine from './DividerLine';
import {useState} from 'react';
interface ModalSheetComponent {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  totalWords?: number;
  ViewStyle?: StyleProp<ViewStyle>;
  navigation?: any;
}

const ModalSheet = ({
  ViewStyle,
  modalVisible,
  setModalVisible,
  navigation,
}: ModalSheetComponent) => {
  return (
    <>
      {modalVisible ? (
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            maxHeight: '90%',
            paddingVertical: 16,
            gap: 16,
            bottom: 0,
            position: 'absolute',
            left: 0,
            right: 0,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 16,
            }}>
            <Text style={{fontSize: 24, fontWeight: '600'}}>Quiz Setup</Text>
          </View>
        </View>
      ) : null}
    </>
  );
};
export default ModalSheet;
