import { ToastContainer } from 'react-toastify';
import CoffeeProvider from './context/coffeProvider';
import LandingPage from './pages/LandingPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <CoffeeProvider>
        <LandingPage></LandingPage>
      </CoffeeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
