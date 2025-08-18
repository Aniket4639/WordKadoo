import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const userDetails: any = await firestore()
      .collection('WordKadoo')
      .doc('123456789')
      .get();
    return userDetails?.data();
  } catch (error) {
    console.log('fetchUser::', error);
  }
});

export default fetchUser;
