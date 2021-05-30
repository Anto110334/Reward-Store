import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/globalStyle';
import { AppProvider } from './context';
import baseTheme from './themes/baseTheme';
import Layout from './templates/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <AppProvider>
        <Router>
          <GlobalStyle/>
            <Layout>
              <Route exact path="/" component={Home}/>
            </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
