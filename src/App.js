import MainProvider from './context/MainProvider';
import { GlobalStyle } from './theme/GlobalStyles';

const App = () => {
  return (
    <MainProvider>
      <GlobalStyle />
      TEST
    </MainProvider>
  );
};

export default App;
