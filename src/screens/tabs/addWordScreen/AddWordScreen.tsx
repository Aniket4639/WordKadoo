import {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GLOBALCOLORS} from '../../../globalStyles/GlobalColors';
import AddingWordCard from '../../../components/AddingWord';
import Toaster from '../../../components/Toaster';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const AddWordScreen = ({navigation}: any) => {
  const activeLanguage = useSelector(
    (state: RootState) => state?.languageInfo?.activeLanguage,
  );
  const [firstText, onChangeFirstText] = useState('');
  const [secondText, onChangeSecondText] = useState('');
  const [optionalText, onChangeOptionalText] = useState('');
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const handleAddButton = async () => {
    try {
      const date = new Date();
      const data = {
        FirstText: firstText,
        SecondText: secondText,
        OptionalText: optionalText,
        Tag: 'Vocabulary',
        Key: 0,
        Time: `${date?.getDate()}/${date?.getMonth() + 1}/${date
          ?.getFullYear()
          .toString()
          .substr(-2)}`,
      };
      const oldData: any = await firestore()
        .collection('WordKadoo')
        .doc('123456789')
        .get();
      let updatedData: any = {};
      if (oldData?.data() && activeLanguage ==='N3') {
        const fetchedData: any = oldData?.data();
        updatedData = {
          ...fetchedData,
          VocabularyN3List: [...(fetchedData?.VocabularyN3List || []), data],
        };
      }
      else if (oldData?.data() && activeLanguage ==='Spanish') {
        const fetchedData: any = oldData?.data();
        updatedData = {
          ...fetchedData,
          VocabularySpanishList: [...(fetchedData?.VocabularySpanishList || []), data],
        };
      } else {
        updatedData = {
          firstName: 'Aniket',
          lastName: 'Kumar',
          wordsList: [data],
        };
      }
      // UpdatedData.push(data);
      await firestore()
        .collection('WordKadoo')
        .doc('123456789')
        .set(updatedData);
      setShowToaster(true);
      console.log('Adding word and uploading Firestore', 'Success');
    } catch (error) {
      console.log('Adding word and uploading Firestore', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      onChangeFirstText(''), onChangeSecondText(''), onChangeOptionalText('');
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: GLOBALCOLORS.background_Color,
          padding: 16,
        }}>
        <TouchableOpacity
          testID="AddWordScreen-back-navigation-view"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            paddingLeft: 16,
          }}
          onPress={() => navigation.goBack()}>
          <Icon
            name="angle-left"
            size={30}
            color={GLOBALCOLORS.primary_Color}
          />
          <Text style={{fontSize: 20, color: GLOBALCOLORS.primary_Color}}>
            Back
          </Text>
        </TouchableOpacity>
        <View
          testID="AddWordScreen-new-word-text-view"
          style={{
            padding: 8,
            flexDirection: 'row',
            marginBottom: 16
          }}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              position: 'relative',
            }}>
            <Text
              style={{
                color: GLOBALCOLORS.black,
                fontSize: 24,
                textTransform: 'uppercase',
                fontWeight: '500',
              }}>
              {`New Word`}
            </Text>
          </View>
          <TouchableOpacity
            testID="AddWordScreen-add-button-view"
            style={{
              backgroundColor:
                firstText != '' && secondText != '' ? '#4169e1' : '#CACFD2',
              borderRadius: 5,
              paddingHorizontal: 12,
              paddingVertical: 8,
              position: 'absolute',
              flex: 1,
              right: 0,
              pointerEvents:
                firstText != '' && secondText != '' ? 'auto' : 'none',
            }}
            onPress={handleAddButton}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 600}}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <AddingWordCard
          firstText={firstText}
          onChangeFirstText={onChangeFirstText}
          secondText={secondText}
          onChangeSecondText={onChangeSecondText}
          optionalText={optionalText}
          onChangeOptionalText={onChangeOptionalText}
        />
      </ScrollView>
      <Toaster
        showToaster={showToaster}
        setShowToaster={setShowToaster}
        titleText={'Success'}
        descriptionText={'Your registration is successfully done.'}
      />
    </SafeAreaView>
  );
};
export default AddWordScreen;
