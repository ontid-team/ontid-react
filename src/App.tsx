import { Provider } from 'react-redux';

import { AppProvider } from './context';
import store from './store';
import ViewRouter from './views';
import { WidgetAlert, WidgetHeader, WidgetFooter } from './widgets';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppProvider>
          <WidgetHeader />
          <ViewRouter />
          <WidgetAlert />
          <WidgetFooter />
        </AppProvider>
      </Provider>
    </>
  );
}

export default App;
