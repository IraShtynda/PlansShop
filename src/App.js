import { ThemeProvider } from '@mui/material';
import theme from './styles/index'
import Header from './components/Header/Header';
import Banner from './components/Banner';
import About from './components/About';
import Plants from './components/Plants/Plants'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <About />
        <Plants />
      </ThemeProvider>
    </>
  );
}

export default App;
