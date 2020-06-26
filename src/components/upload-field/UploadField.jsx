import React from 'react';
import { CloudUpload } from '@material-ui/icons';

// * Components
import { ResponsiveImage } from 'components';

// * Sass
import './UploadField.scss';
import { string, func, object } from 'prop-types';

export const UploadField = ({ label, onChange, error, value }) =>
  <div className="uploadField">
    {error && <span className="uploadField__error">{error}</span>}
    <label  className="uploadField__upload">
      <input type="file" name="file" className="uploadField__control" onChange={onChange}/>
      <p className="btn uploadField__btn"><CloudUpload className="uploadField__uploadIcon" />{label}</p>
    </label>
    {
      value &&
        <ResponsiveImage
          src={URL.createObjectURL(value)}
          classes={['uploadField__uploadedImageContainer']}
        />
      }
      {value && <span className="uploadField__fileName">{value.name}</span>}
  </div>;

UploadField.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  error: string.isRequired,
  value: object
};
