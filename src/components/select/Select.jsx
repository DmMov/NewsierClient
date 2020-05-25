import React, { useState, useEffect } from 'react';

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
