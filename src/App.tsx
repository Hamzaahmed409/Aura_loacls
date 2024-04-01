import Route from '@/route/Route';
import { Provider } from 'react-redux';
import store from './redux/store/Index';
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <Route />
    </Provider>
  );
}
///momomomm
export default App;
