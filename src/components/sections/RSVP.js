import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P } from "../typography";
import Link from "../Link";
import NavAnchor from "../NavAnchor";
import Directory from "../directory/Directory";
import DirectoryItem from "../directory/DirectoryItem";

class RSVP extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>RSVP and Volunteer</H2>
            <P>
              Socialism and democracy require many hands, so if you are able to volunteer to help on
              the day of the convention, <Link href="https://goo.gl/forms/gSFErxs0LC11J2dm2">please sign up here!</Link>
            </P>
            <P>
              We need people to help do set-up, sign-in, food coordination, child supervision,
              ballot and vote counting, and merchandise table operation.
            </P>
            <Directory>
              <DirectoryItem
                text="Join us at the upcoming convention!"
                links={[
                  {
                    label: "RSVP",
                    href: "#"
                  }
                ]}
              />
              <DirectoryItem
                text="Help us put on a great meeting."
                links={[
                  {
                    label: "Volunteer",
                    href: "#"
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

export default RSVP;
