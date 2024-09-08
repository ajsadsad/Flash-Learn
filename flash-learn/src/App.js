import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import HomePage from './components/HomePage/HomePage';
import TopicMenu from './components/TopicMenu/TopicMenu'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path={''} element={
                <HomePage/>
              }/>
              <Route path={"/english"} element={
                <TopicMenu/>
              }/>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
