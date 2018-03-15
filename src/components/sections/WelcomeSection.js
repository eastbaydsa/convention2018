import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import Directory from "../directory/Directory";
import DirectoryItem from "../directory/DirectoryItem";

class WelcomeSection extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Welcome to the East Bay DSA 2018 Convention.</H2>
            <P>
              On April 28th, East Bay DSA will be holding a Convention, the first in our chapter’s
              history. The Convention is we will all come together as a chapter to take on two
              important tasks: electing a new Steering Committee and collectively deciding on a
              Priorities Resolution that will guide our work in the upcoming year. It’s important
              for every member to participate if they can—the more engagement we have, the more
              democratic it is. So please mark your calendars for Saturday, April 28th, and <Link
              href="https://goo.gl/forms/gSFErxs0LC11J2dm2">RSVP!</Link>
            </P>
            <Directory>
              <DirectoryItem
                text="Join us at the upcoming convention!"
                links={[
                  {
                    label: "RSVP",
                    href: "https://goo.gl/forms/gSFErxs0LC11J2dm2"
                  }
                ]}
              />
              <DirectoryItem
                text="Help us put on a great meeting."
                links={[
                  {
                    label: "Volunteer",
                    href: "https://goo.gl/forms/gSFErxs0LC11J2dm2"
                  }
                ]}
              />
            </Directory>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default WelcomeSection;
