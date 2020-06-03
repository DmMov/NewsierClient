import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';

// * Components
import { SelectField } from './SelectField';

// * Utils
import { getRequest } from 'utils/helpers';

export const Select = ({ url, ...props }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    const { status, data } = await getRequest(url);

    if (status === 200)
      setOptions(data);
  }

  return <SelectField {...props} options={options} />;
}

Select.propTypes = {
  url: string.isRequired
};