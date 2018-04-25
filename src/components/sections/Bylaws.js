import React, { PureComponent } from 'react';
import Container from '../Container';
import Section from '../Section';
import { H2, P, OL, OLI } from '../typography';
import Link from '../Link';
import NavAnchor from '../NavAnchor';

class Bylaws extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Bylaws Ammendments</H2>
            <P>
              The following ammendments to our bylaws will be up for discussion
              at the convention:
            </P>

            <OL>
              <OLI>
                Proxy Voting and Remote Access{' '}
                <a
                  href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/498/attachments/original/1524613861/bylaws-amendment-proxy-voting-remote-access.pdf?1524613861"
                  target="_blank">
                  View amendment
                </a>
              </OLI>
              <OLI>
                Transformative Justice{' '}
                <a
                  href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/498/attachments/original/1524613864/bylaws-amendment-transformative-justice.pdf?1524613864"
                  target="_blank">
                  View amendment
                </a>
              </OLI>
              <OLI>
                Accountability of Elected Members{' '}
                <a
                  href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/498/attachments/original/1524613859/bylaws-amendment-accountability-elected-members.pdf?1524613859"
                  target="_blank">
                  View amendment
                </a>
              </OLI>
              <OLI>
                Amendments by Simple Majority{' '}
                <a
                  href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/498/attachments/original/1524613860/bylaws-amendment-amendments-simple-majority.pdf?1524613860"
                  target="_blank">
                  View amendment
                </a>
              </OLI>
              <OLI>
                Timeline for Branch Creation{' '}
                <a
                  href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/498/attachments/original/1524613863/bylaws-amendment-timeline-branch-creation.pdf?1524613863"
                  target="_blank">
                  View amendment
                </a>
              </OLI>
              <OLI>
                Chapter and Branch Structure{' '}
                <a
                  href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/498/attachments/original/1524613861/bylaws-amendment-chapter-branch-structure.pdf?1524613861"
                  target="_blank">
                  View amendment
                </a>
              </OLI>
              <OLI>
                Rules of the Chapter{' '}
                <a
                  href="https://d3n8a8pro7vhmx.cloudfront.net/eastbaydsa/pages/498/attachments/original/1524613862/bylaws-amendment-rules-chapter.pdf?1524613862"
                  target="_blank">
                  View amendment
                </a>
              </OLI>
            </OL>
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default Bylaws;
