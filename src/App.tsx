import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';

import Characters from './Characters/Characters';

const qClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={qClient}>

      <div className="App">
        <div className='container'>
          <h1>{`Ricky & Morty`}</h1>
          <Characters />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
