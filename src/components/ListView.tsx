import {Text, TouchableOpacity, View} from 'react-native';
import {ViewStyle, StyleProp} from 'react-native';
import DividerLine from './DividerLine';
import {GLOBALCOLORS} from '../globalStyles/GlobalColors';
import Icon from 'react-native-vector-icons/FontAwesome';
interface ListViewScreen {
  navigation: any;
  ViewStyle?: StyleProp<ViewStyle>;
  data: any
}

const ListView = ({ViewStyle, navigation, data}: ListViewScreen) => {
  return (
    <View
      style={{
        backgroundColor: GLOBALCOLORS.white,
        borderRadius: 10,
        paddingHorizontal: 16,
      }}>
      {data?.map((e:any, key:any) => {
        return (
          <>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: 16,
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate(e?.navigation)}>
              <Icon name={e?.icon} size={24} />
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text
                  style={{
                    color: GLOBALCOLORS.primary_Color,
                    fontSize: 18,
                    paddingVertical: 12,
                  }}>
                  {e?.name}
                </Text>
                {data.length - 1 !== key ? (
                  <DividerLine
                    ViewStyle={{borderWidth: 0.5, borderColor: '#CACFD2'}}
                  />
                ) : null}
              </View>
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
};
export default ListView;
