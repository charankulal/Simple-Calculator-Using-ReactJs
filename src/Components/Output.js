import React from "react";

const Output = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      {answer === "" ? (
        <>
          <input
            type="text"
            name="input"
            className="form-control my-2"
            style={{ fontSize: "2rem" }}
            value={input}
            placeholder="0"
            maxLength={12}
            onChange={onChangeTagInput}
            autoComplete="off"
          />
        </>
      ) : (
        <>
          <input
            type="text"
            name="input"
            className="form-control my-2"
            style={{ fontSize: "2rem" }}
            value={input}
            placeholder="0"
            maxLength={12}
            disabled
          />
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                style={{ fontSize: "2rem", textAlign: "right", color: "red" }}
              >
                Ans
              </span>
            </div>
            <input
              type="text"
              name="value"
              className="form-control"
              style={{ fontSize: "2rem", textAlign: "right", color: "red" }}
              value={answer === "NaN" ? "Syntax Error" : answer}
              maxLength={12}
              disabled
            />
          </div>
        </>
      )}
    </>
  );
};

export default Output;
