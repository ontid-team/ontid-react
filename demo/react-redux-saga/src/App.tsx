import { Provider } from 'react-redux';

import { AppProvider } from './context';
import PageRouter from './pages';
import store from './store';
import { WidgetAlert, WidgetFooter, WidgetHeader } from './widgets';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppProvider>
          <WidgetHeader />
          <PageRouter />
          <WidgetAlert />
          <WidgetFooter />
        </AppProvider>
      </Provider>
    </>
  );
}

export default App;
