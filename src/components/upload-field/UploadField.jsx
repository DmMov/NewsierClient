import React from 'react';
import { CloudUpload } from '@material-ui/icons';

// * Sass
import './UploadField.scss';

export const UploadField = ({ label, onChange, error, value }) =>
  <div className="uploadField">
    {error && <span className="uploadField__error">{error}</span>}
    <label  className="uploadField__upload">
      <input type="file" name="file" className="uploadField__control" onChange={onChange}/>
      <p className="btn uploadField__btn"><CloudUpload className="uploadField__uploadIcon" />{label}</p>
    </label>
    {!!value && <span className="uploadField__fileName">{value.name}</span>}
  </div>;