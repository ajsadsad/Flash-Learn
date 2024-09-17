import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import HomePage from './components/HomePage/HomePage';
import EnglishPage from './components/EnglishPage/EnglishPage'
import MathPage from './components/MathPage/MathPage';
import SciencePage from './components/SciencePage/SciencePage';
import EnglishDetailPage from './components/EnglishPage/EnglishDetailPage';
import GrammarPage from './components/EnglishPage/GrammarPage';
import SpellingPage from './components/EnglishPage/SpellingPage';
import PunctuationPage from './components/EnglishPage/PunctuationPage';
import SubjectPage from './components/SubjectPage/SubjectPage';

function App() {
  return (
    <div className="App-header">
      <ChakraProvider>
        <BrowserRouter>
            <Routes>
              <Route path={''} element={
                <HomePage/>
              }/>
              <Route path={'/subject'} element={
                <SubjectPage/>
              }/>
              <Route path={"/english"} element={
                <EnglishPage/>
              }/>
              <Route path={"/english/details"} element={
                <EnglishDetailPage/>
              }/>
              <Route path="/english/grammar" element={
                <GrammarPage />
              } />
              <Route path="/english/spelling" element={
                <SpellingPage />
              } />
              <Route path="/english/punctuation" element={
                <PunctuationPage />
              } />
              <Route path={"/math"} element={
                <MathPage/>
              }/>
              <Route path={"/science"} element={
                <SciencePage/>
              }/>
            </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
