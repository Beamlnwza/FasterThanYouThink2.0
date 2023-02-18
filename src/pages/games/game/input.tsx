import React, { useRef, useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { resultAtom as resultState } from './gameAtom'

const Input = () => {
  const [state, setState] = useRecoilState(resultState)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputField, setInputField] = useState<string>('')

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInputField(e.target.value)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const buttonOnClickHandler = () => {
    if (inputField === '') return

    setState((prev) => {
      return {
        ...prev,
        answer: inputField,
      }
    })
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={inputField}
        onChange={onChangeHandler}
      />
      <input type="button" value="Click me" onClick={buttonOnClickHandler} />
    </div>
  )
}

export default Input
