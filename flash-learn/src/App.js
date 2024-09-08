import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import HomePage from './components/HomePage/HomePage';
import EnglishPage from './components/EnglishPage/EnglishPage'
import MathPage from './components/MathPage/MathPage';
import SciencePage from './components/SciencePage/SciencePage';

function App() {
  return (
    <div className="App-header">
      <ChakraProvider>
        <BrowserRouter>
            <Routes>
              <Route path={''} element={
                <HomePage/>
              }/>
              <Route path={"/english"} element={
                <EnglishPage/>
              }/>
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
