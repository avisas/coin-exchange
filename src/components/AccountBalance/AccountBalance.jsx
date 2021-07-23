import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section className="balance-amount">
                Balance: ${this.props.amount}
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
  }