import { lazy, Suspense } from 'react';
import { Route } from 'wouter';
import './App.css';
import {GiftsContextProvider} from './context/GiftsContext';
import Read from './pages/Read';

function App() {
  localStorage.setItem('defaultKeyword', 'random')

  const HomePage = lazy(() => import('./pages/Home'))
  const ListPage = lazy(() => import('./pages/List'))

  return (
    <GiftsContextProvider>
      <div className="App">
        <Suspense fallback={"Loading..."}>
          <section className="App-content">
            <Route path='/' component={HomePage} />
            <Route path='/gifts' component={ListPage} />
            <Route path='/gifts/:id' component={Read} />
          </section>
        </Suspense>
      </div>
    </GiftsContextProvider>
  );
}

export default App;
