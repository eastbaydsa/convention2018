import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P, Strong } from "../typography";
import NavAnchor from "../NavAnchor";

class Priorities extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Priorities Resolutions</H2>
            <P>
              Ratifying a Priorities Resolution is in many respects our most important task at this
              upcoming Convention. This document is a crucial mechanism of democratic
              accountability—it’s the most direct way that we as members have of letting our
              incoming Steering Committee know how we want them to approach the bulk of our
              chapter’s work.
            </P>

            <P>
              <Strong>
                A Priorities Resolution is a holistic, 1000-word (maximum) document that briefly
                lays out an analysis of the political landscape and identifies several "priority
                work areas" that the Resolution submitters think we should devote the bulk of our
                time and attention to in the upcoming year.
              </Strong>
            </P>

            <P>
              Those "priority work areas" will name a political or organizational priority (e.g.
              "Labor," "Political Education," etc.) and then identify a strategy for working towards
              that goal, tactics that we might engage in, and coalition partners we want to
              collaborate with.
            </P>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Priorities;
