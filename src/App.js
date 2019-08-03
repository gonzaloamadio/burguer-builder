import React from 'react';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>              {/* Toolbar and render childrens  */}
        <BurgerBuilder />   {/* Pages  */}
      </Layout>
    </div>
  );
}

export default App;
