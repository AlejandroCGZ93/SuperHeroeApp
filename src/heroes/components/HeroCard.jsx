import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export const HeroCard = ({ id, name, biography, images }) => {
  return (
    <>
    <Card border="dark" style={{width: '20rem', margin:'20px'}}>
    <div className="col animate__animated animate__fadeIn">
      <div className="card mt-2">
        <div className="d-flex imgrespsection">
          <div className="col-6 imgrespcontainer">
            <img className="imgresp" src={images.sm} alt={name} />
          </div>
          <div className="col-6 imgrespcontainer">
            <div className="card-body">
              <p className="card-title text-secondary">{name}</p>
              <p className="card-text">
                <small className="text-muted">
                  {biography.firstAppearance}
                </small>
              </p>

              <Link to={`/hero/${id}`} className="btn btn-outline-info m-2">
                Detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Card>
    </>
  );
};