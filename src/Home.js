import React from "react";
import { Link } from "react-router-dom";

export const Home = (items) => {

  return (
    <div className="container">
      console.log({items})

      <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <Link
                    to={{
                      pathname: `/view-contact-details/${item.id}`,
                      state: { items: item }
                    }}
                  >
                    <button className="btn btn-primary">View</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Home