import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TopNav from './components/sections/TopNav';
import TOC from './components/sections/TOC';
import Cover from './components/sections/Cover';
import WelcomeSection from './components/sections/WelcomeSection';
import Priorities from './components/sections/Priorities';
import Elections from './components/sections/Elections';
import Cochair from './components/candidates/Cochair';
import ViceChair from './components/candidates/ViceChair';
import RecordingSecretary from './components/candidates/RecordingSecretary';
import CommunicationsSecretary from './components/candidates/CommunicationsSecretary';
import Treasurer from './components/candidates/Treasurer';
import AtLarge from './components/candidates/AtLarge';
import Venue from './components/sections/Venue';
import RSVP from './components/sections/RSVP';

const links = [
  { num: 1, label: 'Welcome', to: '/welcome' },
  { num: 2, label: 'Priorities Resolution', to: '/priorities' },
  { num: 3, label: 'Steering Committee Elections', to: '/elections' },
  { num: 'a', label: 'Co-Chairs', to: '/co-chairs', indent: true },
  { num: 'b', label: 'Vice Chair', to: '/vice-chair', indent: true },
  {
    num: 'c',
    label: 'Recording Secretary',
    to: '/recording-secretary',
    indent: true
  },
  {
    num: 'd',
    label: 'Communications Secretary',
    to: '/communications-secretary',
    indent: true
  },
  { num: 'e', label: 'Treasurer', to: '/treasurer', indent: true },
  { num: 'f', label: 'At-Large Members', to: '/at-large', indent: true },
  { num: 4, label: 'RSVP and Volunteer', to: '/rsvp' },
  { num: 5, label: 'Venue, Accomodations, Accessibility', to: '/venue' }
];

const Content = () => (
  <div>
    <TopNav title="EBDSA 2019 Convention" links={links} />
    <Cover title="East Bay DSA 2019 Chapter Convention" anchor="" />
    <TOC anchor="toc" links={links} />
    <WelcomeSection anchor="welcome" />
    <Priorities anchor="priorities" />
    <Elections anchor="elections" />
    <Cochair anchor="co-chairs" />
    <ViceChair anchor="vice-chair" />
    <RecordingSecretary anchor="recording-secretary" />
    <CommunicationsSecretary anchor="communications-secretary" />
    <Treasurer anchor="treasurer" />
    <AtLarge anchor="at-large" />
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
