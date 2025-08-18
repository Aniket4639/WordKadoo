import React from 'react';
import RootNavigator from './src/navigations/RootNavigator';
import store from './src/redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
