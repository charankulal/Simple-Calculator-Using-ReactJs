import React from "react";
import "./Styles.css";

const Buttons = ({
  inputHandler,
  clearInput,
  backspace,
  changePlusMinus,
  calculateAns,
}) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });
  return (
    <>
      <tr>
        <td>
          <button
            className="btn btn-danger col-12 mx-1 rounded-pill bg-danger"
            onClick={clearInput}
          >
            AC
          </button>
        </td>
        <td>
          <button
            className="btn btn-warning col-12 mx-1 rounded-pill bg-warning"
            onClick={backspace}
          >
            &#9003;
            {/* &#x232B; */}
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            log
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            ÷
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            %
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            ^
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            (
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            )
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            √
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            x<sup>2</sup>
          </button>
        </td>
      </tr>

      <tr>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            7
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            8
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            9
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            x
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            x<sup>3</sup>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            4
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            5
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            6
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary "
            onClick={inputHandler}
          >
            -
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            <sup>3</sup>√
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            1
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            2
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            3
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            +
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-secondary"
            onClick={inputHandler}
          >
            !
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button
            className="btn btn-secondary col-12 mx-1 rounded-pill bg-primary"
            onClick={changePlusMinus}
          >
            ±
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            0
          </button>
        </td>
        <td>
          <button
            className="btn btn-primary col-12 mx-1 rounded-pill bg-primary"
            onClick={inputHandler}
          >
            .
          </button>
        </td>
        <td colSpan={2}>
          <button
            className="btn btn-success col-12 mx-1 rounded-pill bg-success"
            id="equalbtn"
            onClick={calculateAns}
          >
            =
          </button>
        </td>
      </tr>
    </>
  );
};

export default Buttons;
