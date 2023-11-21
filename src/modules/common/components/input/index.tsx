import { ErrorMessage } from "@hookform/error-message"
import Eye from "@modules/common/icons/eye"
import EyeOff from "@modules/common/icons/eye-off"
import clsx from "clsx"
import React, { useEffect, useImperativeHandle, useState } from "react"
import { get } from "react-hook-form"

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, errors, touched, required, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text")
      }

      if (type === "password" && !showPassword) {
        setInputType("password")
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current!)

    const hasError = get(errors, name) && get(touched, name)

    return (
      <>
        <input
          type={inputType}
          name={name}
          className="form-control"
          {...props}
          ref={inputRef}
        />
        <label
          htmlFor={name}
          onClick={() => inputRef.current?.focus()}
          className={clsx(
            "mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
            {
              "!text-rose-500": hasError,
            }
          )}
        >
          {label}
          {required && <span className="text-rose-500">*</span>}
        </label>
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 px-4 focus:outline-none transition-all duration-150 outline-none focus:text-gray-700 absolute right-0 top-3"
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}

        {hasError && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return (
                <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                  <span>{message}</span>
                </div>
              )
            }}
          />
        )}
      </>
    )
  }
)

Input.displayName = "Input"

export default Input