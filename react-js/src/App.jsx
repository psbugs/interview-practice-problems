import { store } from './app/store';
import AppRoutes from './routes/AppRoutes'
import Provider from 'react-redux';
const App = ()=> {
  return (
    <>
    <Provider store ={store}>
      <AppRoutes/>
      </Provider>
    </>
  )
}
export default App;
