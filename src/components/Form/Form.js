import React from "react";
import "./Form.css";
function Form() {
  return (
    <div className="container">
      <div>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="Shorten a link here...."
            />
          </div>
        </form>
      </div>
      <div>
        <button type="submit" class="btn btn-primary mb-2">
          Shorten it!
        </button>
      </div>
    </div>
  );
}

export default Form;
