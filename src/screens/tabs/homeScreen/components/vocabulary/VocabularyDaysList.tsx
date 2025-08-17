import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GLOBALSTYLES} from '../../../../../globalStyles/GlobalStyles';
import {GLOBALCOLORS} from '../../../../../globalStyles/GlobalColors';
import Icon from 'react-native-vector-icons/FontAwesome';

const VocabularyDaysListScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{display: 'flex', flex: 1, marginTop: 16}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          paddingLeft: 16,
        }}
        onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={30} color={GLOBALCOLORS.primary_Color} />
        <Text style={{fontSize: 20, color: GLOBALCOLORS.primary_Color}}>
          Back
        </Text>
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', fontSize: 24, fontWeight: '600'}}>
        Day's List
      </Text>
      <View
        style={[
          GLOBALSTYLES.ListCard,
          {marginHorizontal: 16, marginVertical: 16, padding: 16},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 20, color: GLOBALCOLORS.primary_Color}}>
              Day 1
            </Text>
            <Text style={{fontSize: 16}}>
              banana, apple, pineapple, orange..
            </Text>
          </View>
          <View>
            <Icon
              name="angle-right"
              size={24}
              color={GLOBALCOLORS.accent_text}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VocabularyDaysListScreen;
