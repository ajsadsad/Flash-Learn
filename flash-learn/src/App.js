import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import HomePage from './components/HomePage/HomePage';
import EnglishPage from './components/EnglishPage/EnglishPage'
import MathPage from './components/MathPage/MathPage';
import SciencePage from './components/SciencePage/SciencePage';
import ScienceDetailPage from './components/SciencePage/ScienceDetailPage';
import EnglishDetailPage from './components/EnglishPage/EnglishDetailPage';
import GrammarPage from './components/EnglishPage/GrammarPage';
import SpellingPage from './components/EnglishPage/SpellingPage';
import PunctuationPage from './components/EnglishPage/PunctuationPage';
import MathDetailPage from './components/MathPage/MathDetailPage';
import AdditionPage from './components/MathPage/AdditionPage';
import SubtractionPage from './components/MathPage/SubtractionPage';
import DivisionPage from './components/MathPage/DivisionPage';
import MultiplicationPage from './components/MathPage/MultiplicationPage';
import MentalMathPage from './components/MathPage/MentalMathPage';
import EquationsPage from './components/MathPage/EquationsPage';
import AnglesAndShapesPage from './components/MathPage/AnglesAndShapesPage';
import CombinationEquationsPage from './components/MathPage/CombinationEquationsPage';
import SubjectPage from './components/SubjectPage/SubjectPage';
import DesignPage from './components/SciencePage/DesignPage';


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
              <Route path={"/math/details"} element={
                <MathDetailPage/>
              }/>
              <Route path={"/math/addition"} element={
                <AdditionPage/>
              }/>
              <Route path={"/math/subtraction"} element={
                <SubtractionPage/>
              }/>
              <Route path={"/math/division"} element={
                <DivisionPage/>
              }/>
               <Route path={"/math/multiplication"} element={
                <MultiplicationPage/>
              }/>
               <Route path={"/math/mental-math"} element={
                <MentalMathPage/>
              }/>
              <Route path={"/math/equations"} element={
                <EquationsPage/>
              }/>
              <Route path={"/math/angles-and-shapes"} element={
                <AnglesAndShapesPage/>
              }/>
              <Route path={"/math/combination-equations"} element={
                <CombinationEquationsPage/>
              }/>
              <Route path={"/science"} element={
                <SciencePage/>
              }/>
              <Route path={"/science/details"} element={
                <ScienceDetailPage/>
              }/>
              <Route path={"/science/design"} element={
                <DesignPage/>
              }/>
            </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
