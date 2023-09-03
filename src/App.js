import { useReducer } from "react";
import DigitButton from "./Components/DigitButton";
import OperationButton from "./Components/OperationButton";

export const ACTIONS = {
  ADD_DIGITS: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGITS:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    default:
      return state;
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return "";
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function App() {
  const [{ currentOperand = "", previousOperand, operation = "" }, dispatch] =
    useReducer(reducer, {});

  var Answer = `${formatOperand(previousOperand)}${operation}${formatOperand(
    currentOperand
  )}`;
  Answer = Answer.replace("undefined", "");
  Answer = Answer.replace("null", "");

  return (
    <>
    <div
      className="container  h-25 bg-info my-5 "
      style={{ fontSize: "2.5rem", width: "30%" }}
    >
      <h3 className="text-center"> My Calculator</h3>

      <table className="table ">
        <tr>
          <td colSpan="4">
            <div className="col-11 m-2 p-3">
              <input
                className="form-control"
                style={{ height: "60px", fontSize: "1.5rem" }}
                value={Answer.replace("undefined", "")}
                readOnly
              />
            </div>
          </td>
        </tr>

        <tr className="py-2">
          <td className="col-3">
            <button
              className="btn btn-outline-danger col-12 m-2"
              onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            >
              AC
            </button>
          </td>
          <td className="col-3">
            <button
              className="btn btn-outline-warning col-12 m-2"
              onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
            >
              DEL
            </button>
          </td>

          <td className="col-3">
            <OperationButton operation="/" dispatch={dispatch} />
          </td>
          <td className="col-2">
            <OperationButton operation="*" dispatch={dispatch} />
          </td>
        </tr>

        <tr>
          <td>
            <DigitButton digit="7" dispatch={dispatch} />
          </td>
          <td>
            <DigitButton digit="8" dispatch={dispatch} />
          </td>
          <td>
            <DigitButton digit="9" dispatch={dispatch} />
          </td>
          <td>
            <OperationButton operation="-" dispatch={dispatch} />
          </td>
        </tr>

        <tr>
          <td>
            <DigitButton digit="4" dispatch={dispatch} />
          </td>
          <td>
            <DigitButton digit="5" dispatch={dispatch} />
          </td>
          <td>
            <DigitButton digit="6" dispatch={dispatch} />
          </td>
          <td>
            <OperationButton operation="+" dispatch={dispatch} />
          </td>
        </tr>

        <tr>
          <td>
            <DigitButton digit="1" dispatch={dispatch} />
          </td>
          <td>
            <DigitButton digit="2" dispatch={dispatch} />
          </td>
          <td>
            <DigitButton digit="3" dispatch={dispatch} />
          </td>

          <td rowSpan="2">
            <button
              className="btn btn-outline-success col-12 m-2"
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
              style={{ height: "120px" }}
            >
              =
            </button>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <DigitButton digit="0" dispatch={dispatch} />
          </td>
          <td>
            <DigitButton digit="." dispatch={dispatch} />
          </td>
        </tr>
      </table>
    </div>
    <footer className="my-5 pt-5 text-muted text-center text-small">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-github" viewBox="0 0 16 16">
                <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg><a className="no-text-decoration link-offset-2 link-underline link-underline-opacity-0 mx-2"
                href="https://github.com/charankulal">Charan-k-github</a>
      </footer>
    </>
  );
}

export default App;
