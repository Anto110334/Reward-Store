import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/globalStyle';
import { AppProvider } from './context';
import baseTheme from './themes/baseTheme';
import Layout from './templates/Layout';
import Home from './pages/Home';
import History from './pages/History';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <AppProvider>
        <Router>
          <GlobalStyle/>
            <Layout>
              <Route exact path="/Reward-Store" component={Home}/>
              <Route exact path="/Reward-Store/historial" component={History}/>
            </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
