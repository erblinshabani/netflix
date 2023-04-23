import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/home';
import { Navbar } from './Navbar';
import { LogIn } from './pages/login/login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import { Loading } from './loading/loading';
import { Movies } from './pages/movies/movies';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MoviesList } from './query/movies-list';
import { NetflixMovie } from './pages/watch-movie/Netflix-movie';
import { Profile } from './pages/login/profile';

function App() {
  const [user, loading] = useAuthState(auth)

  const client = new QueryClient()

  if(loading) return <Loading />

  return (
    <div className="App">
      <MoviesList>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/netflix' element={user ? <Movies /> :<Home />}/>
              <Route path='/login' element={user ? <Profile /> : <LogIn />}/>
              <Route path='/movie/:movieId' element={<NetflixMovie />}/>
            </Routes>
          </Router>
        </QueryClientProvider>
      </MoviesList>
    </div>
  );
}

export default App;
