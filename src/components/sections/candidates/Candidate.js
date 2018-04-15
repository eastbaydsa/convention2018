import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { red } from '../../colors';
import { P } from '../../typography';

const A = styled.a`
  color: ${red};
`;

export class CandidateStatment extends PureComponent {
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
