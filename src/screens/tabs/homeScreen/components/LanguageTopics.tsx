import {Text, View} from 'react-native';
import ListView from '../../../../components/ListView';
import {GLOBALCOLORS} from '../../../../globalStyles/GlobalColors';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {useDeferredValue, useEffect, useState} from 'react';

const LanguageTopics = ({navigation}: any) => {
  const activeLanguage = useSelector(
    (state: RootState) => state?.languageInfo?.activeLanguage,
  );
  const japaneseN3Data = [
    {name: 'All', icon: 'folder-o', navigation: 'AllWordList'},
    {name: 'Vocabulary', icon: 'book', navigation: 'VocabularyDaysList'},
    {name: 'Grammar', icon: 'paragraph'},
    {name: 'Kanji', icon: 'font'},
    {name: 'Custom Added', icon: 'book', navigation: 'VocabularyList'},
  ];
  const spanishData = [
    {name: 'Custom Added', icon: 'book', navigation: 'VocabularyList'},
  ];
  const [languageData, setLanguageData] = useState<any>(japaneseN3Data);

  useEffect(() => {
    switch (activeLanguage) {
      case 'N3':
        return setLanguageData(japaneseN3Data);
      default:
        return setLanguageData(spanishData);
    }
  }, [activeLanguage]);

  return (
    <View
      style={{
        gap: 4,
      }}>
      <Text style={{color: GLOBALCOLORS.muted_Color, paddingLeft: 4}}>
        Language Topics{' '}
      </Text>
      <ListView
        data={languageData}
        navigation={navigation}
      />
    </View>
  );
};
export default LanguageTopics;
