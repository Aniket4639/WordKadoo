import {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tts from 'react-native-tts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GLOBALCOLORS} from '../../../../../globalStyles/GlobalColors';
import {GLOBALSTYLES} from '../../../../../globalStyles/GlobalStyles';
import {RootState} from '../../../../../redux/store';
import {useSelector} from 'react-redux';

interface VocabularyListScreen {
  firstWord: string;
  secondWord: string;
}

const VocabularyListScreen = ({navigation}: any) => {
  const userData = useSelector((state: RootState) => state?.userInfo?.userData);
  const activeLanguage = useSelector(
    (state: RootState) => state?.languageInfo?.activeLanguage,
  );
  console.group('Aniket:VocabularyListScree', userData);

  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const vocabularyData =
    activeLanguage === 'N3'
      ? userData?.VocabularyN3List
      : userData?.VocabularySpanishList;

  const handlePlayIcon = async (firstWord: string, secondWord: string) => {
    Tts.setDefaultLanguage('ja-JP');
    Tts.stop();
    Tts.speak(secondWord);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: '#F6F2F7',
          padding: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
            opacity: modalVisible ? 0.3 : 1,
            pointerEvents: modalVisible ? 'none' : 'auto',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center', gap: 8}}
              onPress={() => navigation.goBack()}>
              <Icon name="angle-left" size={30} color="#4169e1" />
              <Text style={{fontSize: 20, color: '#4169e1'}}>Back</Text>
            </TouchableOpacity>
            {vocabularyData?.length && (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                }}>{`${vocabularyData?.length} words`}</Text>
            )}
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              backgroundColor: '#4169e1',
              padding: 8,
              borderRadius: 10,
            }}
            onPress={() => setModalVisible(true)}>
            <Icon name="graduation-cap" size={20} color="#FFFFFF" />
            <Text style={{fontSize: 20, color: '#FFFFFF'}}>Quiz</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
            gap: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              flex: 1,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center', gap: 8}}
              onPress={() => navigation.goBack()}>
              <Icon name="list-ul" size={20} color="#4169e1" />
            </TouchableOpacity>
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 5,
                padding: 8,
                fontSize: 18,
                flex: 1,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Icon name="sort" size={20} color="#4169e1" />
            <Text style={{fontSize: 20, color: '#4169e1'}}>Filter</Text>
          </TouchableOpacity>
        </View>
        {vocabularyData?.length > 0 ? (
          vocabularyData?.map((e: any) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 16,
                  marginBottom: 12,
                  alignItems: 'center',
                  gap: 4,
                  borderRadius: 8,
                  flex: 1,
                }}
                onPress={() => {
                  navigation.navigate('DetailsWord', {
                    Key: e?.Key,
                  });
                }}>
                <Text style={{fontSize: 18}}>{e?.FirstText}</Text>
                <Text style={{fontSize: 18}}>{e?.SecondText}</Text>
                {e?.OptionalText ? (
                  <Text style={{fontSize: 18, fontWeight: 500}}>
                    {e?.OptionalText}
                  </Text>
                ) : null}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                    alignSelf: 'flex-end',
                  }}>
                  <Icon
                    name="volume-up"
                    size={24}
                    color={'#4169e1'}
                    onPress={() => handlePlayIcon(e?.FirstText, e?.SecondText)}
                  />
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View
            style={[
              GLOBALSTYLES.card,
              {
                alignItems: 'center',
                justifyContent: 'center',
                height: 200,
                gap: 4,
              },
            ]}>
            <Text style={{fontSize: 24, fontWeight: '700'}}>
              No words in the bucket
            </Text>
            <Text style={{fontSize: 20, color: GLOBALCOLORS.accent_text}}>
              Please add some words.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default VocabularyListScreen;
