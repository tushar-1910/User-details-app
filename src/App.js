import { Route, Routes } from 'react-router-dom'
import "./App.css";
import ContestProvider from "./contestApi/ContestProvider";
import LandingPage from './components/Home';
import HomePage from './components/Profile';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import ToDo from './components/Todo';

function App() {
  return (
    <div className="App">
      <ContestProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Profilepage/:id" element={<HomePage />} />
        <Route path="post" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<ToDo />} />
    </Routes>
      </ContestProvider>
    </div>
  );
}

export default App;
