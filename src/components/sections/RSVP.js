import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, H3, P } from "../typography";
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
            <P>Socialism and democracy require many hands, so if you are able to volunteer to help on the day of the convention, please sign up here to <Link href="https://www.eastbaydsa.org/events/673/2019-05-18-east-bay-dsa-local-convention-2019/">RSVP</Link> and <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf4Q816JJ6GBRRtbm3b1n_UA-0yyPH12S5Wk4hXEmFBpYO4tQ/viewform">volunteer</Link>!</P>

            <P>We need people to help do set-up, sign-in, food coordination, child supervision, ballot and vote counting, and merchandise table operation.</P>
        
            <Directory>
              <DirectoryItem
                text="Join us at the upcoming convention!"
                links={[
                  {
                    label: "RSVP",
                    href: "https://www.eastbaydsa.org/events/673/2019-05-18-east-bay-dsa-local-convention-2019/"
                  }
                ]}
              />
              <DirectoryItem
                text="Help us put on a great meeting."
                links={[
                  {
                    label: "Volunteer",
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSf4Q816JJ6GBRRtbm3b1n_UA-0yyPH12S5Wk4hXEmFBpYO4tQ/viewform"
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
