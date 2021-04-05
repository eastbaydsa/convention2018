import React from "react";
import { Route, Switch } from "react-router-dom";

import TopNav from "./components/sections/TopNav";
import TOC from "./components/sections/TOC";
import Cover from "./components/sections/Cover";
import WelcomeSection from "./components/sections/WelcomeSection";
import ConventionDescription from "./components/sections/ConventionDescription";
import ConventionChanges from "./components/sections/ConventionChanges";
import Priorities from "./components/sections/Priorities";
import Convention from "./components/sections/Convention";
import ConventionTimeline from "./components/sections/ConventionTimeline";
import Questions from "./components/sections/Questions";

const links = [
  { num: 1, label: "Welcome", to: "/welcome" },
  {
    num: 2,
    label: "What are the Convention and the Priorities Resolutions?",
    to: "/convention-description",
  },
  {
    num: 3,
    label: "Why are we changing the convention?",
    to: "/convention-changes",
  },
  {
    num: 4,
    label: "How will the Priorities Resolution process work?",
    to: "/priorities",
  },
  { num: 5, label: "What will the Convention Look Like?", to: "/convention" },
  {
    num: 6,
    label: "What is the timeline for the convention?",
    to: "/convention-timeline",
  },
  { num: 7, label: "Questions and Accessibility", to: "/questions" },
];

const Content = () => (
  <div>
    <TopNav title="EBDSA 2020 Convention" links={links} />
    <Cover title="East Bay DSA 2020 Chapter Convention" anchor="" />
    <TOC anchor="toc" links={links} />
    <WelcomeSection anchor="welcome" />
    <ConventionDescription anchor="convention-description" />
    <ConventionChanges anchor="convention-changes" />
    <Priorities anchor="priorities" />
    <Convention anchor="convention" />
    <ConventionTimeline anchor="convention-timeline" />
    <Questions anchor="questions" />
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
