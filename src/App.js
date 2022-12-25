import { ThemeProvider } from '@mui/material';
import theme from './styles/index'
import Header from './components/Header/Header';
import Banner from './components/Banner';
import About from './components/About';
import Plants from './components/Plants/Plants'
import FAQ from './components/FAQ';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <About />
        <Plants />
        <FAQ />
      </ThemeProvider>
    </>
  );
}

export default App;
