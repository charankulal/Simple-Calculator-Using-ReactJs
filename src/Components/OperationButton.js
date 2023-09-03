import { ACTIONS } from "../App"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
    className="btn btn-outline-secondary col-12 mx-1"
   
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      
    >
      {operation}
    </button>
  )
}