import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/globalStyle';
import baseTheme from './themes/baseTheme';
import Layout from './templates/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Router>
        <GlobalStyle/>
          <Layout>
            <Route exact path="/" component={Home}/>
          </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
