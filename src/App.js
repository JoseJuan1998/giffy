import { lazy, Suspense } from 'react';
import { Route } from 'wouter';
import './App.css';
import {GifsContextProvider} from './context/GifsContext';
import Read from './pages/Read';

function App() {
  localStorage.setItem('defaultKeyword', 'random')

  const HomePage = lazy(() => import('./pages/Home'))
  const ListPage = lazy(() => import('./pages/List'))

  return (
    <GifsContextProvider>
      <div className="App">
        <section className="App-content">
          <Suspense fallback={"Loading..."}>
            <Route path='/' component={HomePage} />
            <Route path='/Gifs' component={ListPage} />
            <Route path='/Gifs/:id' component={Read} />
            <Route path='/404' component={() => <h1>{'404 Error :('}</h1>} />
          </Suspense>
        </section>
      </div>
    </GifsContextProvider>
  );
}

export default App;
