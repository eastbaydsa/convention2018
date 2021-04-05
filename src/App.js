import React from "react";
import { Route, Switch } from "react-router-dom";

import TopNav from "./components/sections/TopNav";
import TOC from "./components/sections/TOC";
import Cover from "./components/sections/Cover";
import WelcomeSection from "./components/sections/WelcomeSection";
import ConventionDescription from "./components/sections/ConventionDescription";
import SteeringCommittee from "./components/sections/SteeringCommittee";
import NationalConventionDelegate from "./components/sections/NationalConventionDelegate";
import Priorities from "./components/sections/Priorities";
import PositionPapers from "./components/sections/PositionPapers";
import Convention from "./components/sections/Convention";
import ConventionTimeline from "./components/sections/ConventionTimeline";
import Questions from "./components/sections/Questions";

const links = [
  {
    num: 1,
    label: "What is the Local Convention?",
    to: "/what-is-local-convention",
  },
  {
    num: 2,
    label: "What will the Convention Look Like?",
    to: "/convention-description",
  },
  {
    num: 3,
    label: "How do I run for Steering Committee?",
    to: "/steering-committee",
  },
  {
    num: 4,
    label: "How do I run for National Convention Delegate?",
    to: "/national-convention-delegate",
  },
  {
    num: 5,
    label: "What are the Chapter Platform and Priority Campaigns?",
    to: "/platform-priorities",
  },
  {
    num: 5,
    label: "Position Papers",
    to: "/position-papers",
  },
  {
    num: 6,
    label: "Local Convention Timeline",
    to: "/position-papers",
  },

  // {
  //   num: 4,
  //   label: "How will the Priorities Resolution process work?",
  //   to: "/priorities",
  // },
  // { num: 5, label: "What will the Convention Look Like?", to: "/convention" },
  // {
  //   num: 6,
  //   label: "What is the timeline for the convention?",
  //   to: "/convention-timeline",
  // },
  // { num: 7, label: "Questions and Accessibility", to: "/questions" },
];

const Content = () => (
  <div>
    <TopNav title="EBDSA 2021 Convention" links={links} />
    <Cover title="East Bay DSA 2021 Chapter Convention" anchor="" />
    <TOC anchor="toc" links={links} />
    <WelcomeSection anchor="what-is-local-convention" />
    <ConventionDescription anchor="convention-description" />
    <SteeringCommittee anchor="steering-committee" />
    <NationalConventionDelegate anchor="national-convention-delegate" />
    <Priorities anchor="platform-priorities" />
    <PositionPapers anchor="position-papers" />
    {/* <Convention anchor="convention" /> */}
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
