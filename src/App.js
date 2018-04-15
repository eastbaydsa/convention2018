import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TopNav from './components/sections/TopNav';
import TOC from './components/sections/TOC';
import Cover from './components/sections/Cover';
import WelcomeSection from './components/sections/WelcomeSection';
import Priorities from './components/sections/Priorities';
import Elections from './components/sections/Elections';
import Cochair from './components/sections/candidates/Cochair';
import Venue from './components/sections/Venue';
import RSVP from './components/sections/RSVP';

const links = [
  { label: 'Welcome', to: '/welcome' },
  { label: 'Priorities Resolutions', to: '/priorities' },
  { label: 'Steering Committee Elections', to: '/elections' },
  { label: 'Co-Chairs', to: '/co-chairs' },
  { label: 'RSVP and Volunteer', to: '/rsvp' },
  { label: 'Venue, Accomodations, Accessibility', to: '/venue' }
];

const Content = () => (
  <div>
    <TopNav title="EBDSA 2018 Convention" links={links} />
    <Cover title="East Bay DSA 2018 Chapter Convention" anchor="" />
    <TOC anchor="toc" links={links} />
    <WelcomeSection anchor="welcome" />
    <Priorities anchor="priorities" />
    <Elections anchor="elections" />
    <Cochair anchor="co-chairs" />
    <RSVP anchor="rsvp" />
    <Venue anchor="venue" />
  </div>
);

function App() {
  return (
    <Switch>
      <Route path="/:section/:candidate" component={Content} />
      <Route path="/:section" component={Content} />
      <Route path="/" component={Content} />
    </Switch>
  );
}

export default App;
