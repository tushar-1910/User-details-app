import { Route, Routes } from 'react-router-dom'
import "./App.css";
import ContextProvider from "./contextApi/ContextProvider";
import LandingPage from './components/Home';
import HomePage from './components/Profile';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import ToDo from './components/Todo';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Profilepage/:id" element={<HomePage />} />
        <Route path="post" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<ToDo />} />
    </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
