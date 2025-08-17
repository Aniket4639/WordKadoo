import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface ToasterInterface {
  showToaster: boolean;
  titleText: string;
  descriptionText: string;
  setShowToaster: (value: boolean) => void;
}

const Toaster = ({
  showToaster,
  titleText,
  descriptionText,
  setShowToaster,
}: ToasterInterface) => {
  useEffect(() => {
    if (showToaster) {
      setTimeout(() => {
        setShowToaster(false);
      }, 3000);
    }
  }, [showToaster]);
  return (
    <>
      {showToaster ? (
        <View
          style={{
            backgroundColor: 'white',
            top: 30,
            position: 'absolute',
            width: '90%', // fixed width
            alignSelf: 'center',
            paddingHorizontal: 16,
            paddingVertical: 24,
            flexDirection: 'row',
            gap: 12,
          }}
        >
          <Icon name="check" size={24} color="green" />
          <View style={{ marginRight: 24 }}>
            <Text style={{ fontWeight: '700', fontSize: 18 }}>{titleText}</Text>
            <Text style={{ fontSize: 16 }}>{descriptionText}</Text>
          </View>
        </View>
      ) : null}
    </>
  );
};
export default Toaster;
