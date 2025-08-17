import {Text, View} from 'react-native';
import ListView from '../../../../components/ListView';
import { GLOBALCOLORS } from '../../../../globalStyles/GlobalColors';

const LanguageTopics = ({navigation}: any) => {
  const data = [
    {name: 'All', icon: 'folder-o', navigation: 'AllWordList'},
    {name: 'Vocabulary', icon: 'book', navigation: 'VocabularyDaysList'},
    {name: 'Grammar', icon: 'paragraph'},
    {name: 'Kanji', icon: 'font'},
    {name: 'Custom Added', icon: 'book', navigation: 'VocabularyList'},
  ];
  return (
    <View
      style={{
        gap: 4,
      }}>
      <Text style={{color: GLOBALCOLORS.muted_Color, paddingLeft: 4}}>Language Topics </Text>
      <ListView data={data} navigation={navigation} />
    </View>
  );
};
export default LanguageTopics;
