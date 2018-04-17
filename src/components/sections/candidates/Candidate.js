import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { red } from '../../colors';
import { P, H3 } from '../../typography';
import NavAnchor from '../../NavAnchor';
import Container from '../../Container';
import breakpoint from '../../styles/breakpoint';

const A = styled.a`
  color: ${red};
`;

const Img = styled.img`
  display: inline;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  max-width: ${props => props.maxWidth};
  margin-right: 30px;

  ${breakpoint.tablet`
    height: 220px;
    width: 220px;
  `};
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Nominations = styled.ul`
  margin-bottom: 0;
  margin-top: 15px;
`;

const CandidateContainer = styled.div`
  margin-top: 30px;
  width: 100%;

  ${breakpoint.tablet`
    width: 680px;
  `};
`;

class Candidate extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Container>
          <CandidateContainer>
            <H3>{this.props.name}</H3>
            {this.props.children}
          </CandidateContainer>
        </Container>
      </NavAnchor>
    );
  }
}

class CandidateStatment extends PureComponent {
  state = {
    showStatement: false
  };

  toggleStatement = e => {
    e.preventDefault();
    this.setState({
      showStatement: !this.state.showStatement
    });
  };

  render() {
    return (
      <div>
        <P>
          <A href="" onClick={this.toggleStatement}>
            {this.state.showStatement ? 'Hide' : 'Show'} statement
          </A>
        </P>
        {this.state.showStatement && this.props.children}
      </div>
    );
  }
}

class CandidateHeader extends PureComponent {
  render() {
    return (
      <Header>
        <Img src={`/images/candidates/${this.props.img}`} />
        <div>
          Nominated By:
          <Nominations>
            {this.props.nominations.map(n => <li>{n}</li>)}
          </Nominations>
        </div>
      </Header>
    );
  }
}

export { Candidate, CandidateHeader, CandidateStatment };
