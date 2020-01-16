
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Loader } from './modules/Config';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const PostDetail = lazy(() => import('./routes/PostDetail'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className="page-content">
          <div className="content-wrapper container">
            <div className="content pt-5">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/:postSlug" component={PostDetail}/>
                </Switch>
            </div>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
