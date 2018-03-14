import React, { PureComponent } from "react";
import Container from "../Container";
import Section from "../Section";
import { H2, P } from "../typography";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis risus iaculis, tincidunt purus in, faucibus tortor. Nunc at
              felis a tellus facilisis accumsan. Pellentesque faucibus, urna sed
              pharetra bibendum, nulla enim blandit nisi, in mollis sapien eros
              sed est. Nullam ultrices hendrerit urna porta fermentum. Proin leo
              enim, laoreet eu vehicula et, lobortis rhoncus nisl. Vivamus
              malesuada magna a euismod dapibus. Duis in ante at elit maximus
              aliquet. Ut hendrerit magna in placerat ultricies. Cras quis erat
              vestibulum, ultrices metus sed, rhoncus nisl. Nulla viverra
              ultricies dui sit amet blandit.
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

export default WelcomeSection;
