import React from 'react'

const User = ({ username, name, email, address, website, phone, company}) => (
  <div className="User card mb-3">
    <div>
      <div className="row no-gutters">
       
        <div className="col-md-11">
          <div className="card-body">
            <h5 className="card-title">{ username }</h5>
            <p className="card-text">{ name }</p>
            <button type="button" className="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
              Ver detalles
            </button>
          </div>
        </div>
        <div className="modal fade" id="exampleModal"  role="dialog"  aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h5 className="modal-title text-danger" id="exampleModalLabel">{username}</h5>
                  <h6 className="text-secondary">{name}</h6>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <small className="font-weight-bold">EMAIL</small>
                <p>{email}</p>
                <small className="font-weight-bold">DIRECCIÓN</small>
                <p className="mb-0">{address.street}, {address.suite}</p>
                <p className="mb-0">{address.city}</p>
                <p>{address.zipcode}</p>
                <small className="font-weight-bold">TELEFONO</small>
                <p>{phone}</p>
                <small className="font-weight-bold">SITIO WEB</small>
                <p>{website}</p>
                <small className="font-weight-bold">COMPAÑIA</small>
                <p>{company.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default User