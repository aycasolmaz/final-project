import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ViewUserDetails = (_) => {

  const { state } = useLocation();

  return (
    <div className="container">
      <div className="row m-2">
        <div key={state.item.id} className="col-sm-6 col-md-4 v my-2">
          <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
            <div className="card-body">
              <h5 className="card-title text-center h2">Id :{state.item.id} </h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                {state.item.email}
              </h6>
              <p className="card-text">{state.item.body}</p>
            </div>
          </div>
        </div>

      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>);
};
