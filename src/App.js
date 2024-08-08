import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import PageNotFound from './pages/PageNotFound';
import FormPage from './pages/FormPage';

// import NotesCard from './components/NotesCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
