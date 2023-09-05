import React, { ReactNode } from "react";
import InputMask from "react-input-mask"; // Импортируем библиотеку для маскирования

interface InputProps {
  placeholder?: ReactNode;
  type?: string;
  textarea?: boolean;
  reactHookForm?: any;
  error?: string | null;
  labelHeight?: string;
  marginTop?: string;
  left?: string;
  marginTopLabel?: string;
  alignItems?: string;
}

const Input: React.FC<InputProps> = ({
                                       placeholder,
                                       type,
                                       textarea,
                                       error,
                                       reactHookForm,
                                       labelHeight,
                                       marginTop,
                                       left,
                                       marginTopLabel,
                                       alignItems,
                                     }) => {
  return (
      <>
        <label
            style={{
              height: labelHeight,
              marginTop: marginTopLabel,
              alignItems: alignItems,
            }}
            className="labelContainer"
        >
          {textarea ? (
              <>
            <textarea
                style={{ marginTop: marginTop }}
                required
                {...reactHookForm}
                className="textarea"
            />
                <span style={{ left: left }} className="floatingLabel">
              {placeholder}
            </span>
              </>
          ) : (
              <>
                <InputMask
                    mask="+9 (999) 999 99 99"
                    maskChar="_"
                    {...reactHookForm}
                    type={type}
                    className="input"
                    required
                >
                  {(inputProps: any) => (
                      <input {...inputProps} />
                  )}
                </InputMask>
                <span style={{ left: left }} className="floatingLabel">
              {placeholder}
            </span>
              </>
          )}
        </label>
        {error && <h5 className="error">{error}</h5>}
      </>
  );
};

export default Input;
