import React from 'react';

interface InputProps {
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  reactHookForm?: any;
  error?: string | null;
}

const Input: React.FC<InputProps> = ({
  placeholder,

  type,
  textarea,
  error,
  reactHookForm,
}) => {
  return (
    <>
      <label className="labelContainer">
        {textarea ? (
          <>
            <textarea  required {...reactHookForm} className="textarea" />
            <span className="floatingLabel">{placeholder}</span>{' '}
          </>
        ) : (
          <>
            <input {...reactHookForm} type={type} className="input" required />
            <span className="floatingLabel">{placeholder}</span>
          </>
        )}
      </label>
      {error && <h5 className="error">{error}</h5>}
    </>
  );
};

export default Input;
