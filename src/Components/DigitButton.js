import { ACTIONS } from "../App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
    className="btn btn-outline-primary col-12 m-2"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: { digit } })}
    >
      {digit}
    </button>
  )
}