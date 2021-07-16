import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Wrapper from './components/wrapper';

import IndexPage from './pages/index/index';
import AboutPage from './pages/about/index'
import { ABOUT_ME_PAGE, INDEX_PAGE, PROJECTS_PAGE, TALENTS_PAGE } from './config/routes';
import TalentsPage from "./pages/talents";
import ProjectsPage from './pages/projects'

function App() {
  const location = useLocation()

  return (
    <Wrapper>
      <TransitionGroup
        exit={false}>
        <CSSTransition
          timeout={300}
          classNames='fade'
          unmountOnExit
          key={location.key}
        >
          <Switch location={location}>
            <Route path={INDEX_PAGE} exact component={IndexPage} />
            <Route path={ABOUT_ME_PAGE} exact component={AboutPage} />
            <Route path={TALENTS_PAGE} exact render={TalentsPage} />
            <Route path={PROJECTS_PAGE} exact render={ProjectsPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

export default App;
