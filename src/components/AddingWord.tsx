import {
  TextInput,
  View,
} from 'react-native';
import DividerLine from '../components/DividerLine';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GLOBALCOLORS } from '../globalStyles/GlobalColors';

const AddingWordCard = ({
  firstText,
  onChangeFirstText,
  secondText,
  onChangeSecondText,
  optionalText,
  onChangeOptionalText,
}: any) => {
  return (
    <View
      style={{
        gap: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CACFD2',
        boxShadow: [
          {
            offsetX: 10,
            offsetY: -3,
            blurRadius: '15px',
            spreadDistance: '10px',
            color: 'white',
            inset: true,
          },
        ],
      }}
    >
      <View style={{ gap: 24, paddingHorizontal: 16, paddingVertical: 24 }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TextInput
            value={firstText}
            onChangeText={onChangeFirstText}
            placeholder="Japanese"
            placeholderTextColor={GLOBALCOLORS.placeholder_text_color}
            style={{
              backgroundColor: GLOBALCOLORS.grey,
              borderRadius: 10,
              padding: 8,
              fontSize: 18,
              flex: 1,
              borderWidth: 1,
              borderColor: GLOBALCOLORS.border_Color,
            }}
          />
          <Icon name="book" size={24} />
        </View>
        <DividerLine
          ViewStyle={{
            borderWidth: 0.3,
            borderColor: GLOBALCOLORS.border_Color,
            marginLeft: 32,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TextInput
            value={secondText}
            onChangeText={onChangeSecondText}
            placeholder="English"
            placeholderTextColor={GLOBALCOLORS.placeholder_text_color}
            style={{
              backgroundColor: '#F4F6F7',
              borderRadius: 10,
              padding: 8,
              fontSize: 18,
              flex: 1,
              borderWidth: 1,
              borderColor: GLOBALCOLORS.border_Color,
            }}
          />
          <Icon name="language" size={24} />
        </View>
      </View>
      <View
        style={{
          padding: 24,
          backgroundColor: '#F4F6F7',
          flexDirection: 'row',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <TextInput
          value={optionalText}
          onChangeText={onChangeOptionalText}
          placeholder="Comment(optional)"
          placeholderTextColor={GLOBALCOLORS.placeholder_text_color}
          multiline={true}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 5,
            padding: 8,
            fontSize: 18,
            flex: 1,
            textAlignVertical: 'top',
            height: 130,
            alignSelf: 'flex-start',
          }}
        />
      </View>
    </View>
  );
};
export default AddingWordCard;
