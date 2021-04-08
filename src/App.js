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
import Process from "./components/sections/Process";
import ConventionTimeline from "./components/sections/ConventionTimeline";
import Questions from "./components/sections/Questions";
import Rules from "./components/sections/Rules";

const links = [
  {
    num: 1,
    label: "What is the Local Convention?",
    to: "#what-is-local-convention",
  },
  {
    num: 2,
    label: "What will the Convention be Like?",
    to: "#convention-description",
  },
  {
    num: 3,
    label: "How do I run for Steering Committee?",
    to: "#steering-committee",
  },
  {
    num: 4,
    label: "How do I run for National Convention Delegate?",
    to: "#national-convention-delegate",
  },
  {
    num: 5,
    label: "What are the Platform and Organizational Priorities?",
    to: "#platform-priorities",
  },
  {
    num: 6,
    label: "Why are we changing the process this year?",
    to: "#changing-process",
  },
  {
    num: 7,
    label: "Position Papers",
    to: "#position-papers",
  },
  {
    num: 8,
    label: "2021 Local Convention Timeline",
    to: "#timeline",
  },
  {
    num: 9,
    label: "Questions and Accessibility",
    to: "#questions-accessibility",
  },
  // {
  //   num: 10,
  //   label: "Local Convention Rules",
  //   to: "/rules",
  // },
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
    <Process anchor="changing-process" />
    <PositionPapers anchor="position-papers" />
    <ConventionTimeline anchor="timeline" />
    <Questions anchor="questions-accessibility" />
    {/* <Rules anchor="rules" /> */}
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
