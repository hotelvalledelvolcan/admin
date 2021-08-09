import * as React from 'react';
import { FC } from 'react';
import { Link, FieldProps } from 'react-admin';

import FullNameField from './FullNameField';
import { Customer } from '../types';

const getLinkProps = (record: Customer) =>  { // make sure all required component's inputs/Props keys&types match
    return {to: `/customers/${record.id}`}
  }

const CustomerLinkField: FC<FieldProps<Customer>> = props =>
    props.record ? (
        <Link {...getLinkProps(props.record)}>
            <FullNameField {...props} />
        </Link>
    ) : null;

CustomerLinkField.defaultProps = {
    source: 'customer_id',
    addLabel: true,
};

export default CustomerLinkField;
