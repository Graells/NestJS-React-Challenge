import CoffeeProvider from './context/coffeProvider';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {' '}
      <CoffeeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>} />
          </Routes>
        </BrowserRouter>
      </CoffeeProvider>
    </div>
  );
}

export default App;
