import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {
  return(
    <div>
      <table id="table" className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">First</th>
            <th scope="col">Last </th>
            <th scope="col">IP</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            <th scope="col">Created</th>
            <th scope="col">Updated</th>
          </tr>
        </thead>
        <tbody>
          {/* For every object in the customers array, (which was imported earlier) return a
          table row with the customer's id, email, first name, etc.*/}
          {/*json.map(customer => {
            return (
              <tr key={customer.id}>
                <th scope="row" className="row-id">{customer.id}</th>
                <td className="row-email">{customer.email}</td>
                <td className="row-firstName">{customer.first_name}</td>
                <td className="row-lastName">{customer.last_name}</td>
                <td className="row-ip">{customer.ip}</td>
                <td className="row-latitude">{customer.latitude}</td>
                <td className="row-longitude">{customer.longitude}</td>
                <td className="row-createdAt">{customer.created_at}</td>
                <td className="row-updatedAt">{customer.updated_at || "null"}</td>
              </tr>
            );
          })*/}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));