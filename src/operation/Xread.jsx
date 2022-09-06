import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Xread = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get('https://6315b6ef33e540a6d38296a9.mockapi.io/crud-operation')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  const deleteHandle = (id) => {
    axios.delete(`https://6315b6ef33e540a6d38296a9.mockapi.io/crud-operation/${id}`)
    .then(() => {
      getData();
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachdata) => {
            return (
              <tr>
                <th scope="row">{eachdata.id}</th>
                <td>{eachdata.name}</td>
                <td>{eachdata.email}</td>
                <td>
                  <button className="btn btn-success">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteHandle(eachdata.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Xread;
