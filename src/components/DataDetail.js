import React from "react";
import "./DataDetail.css";

function DataDetail({ users }) {

    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
      }

    return(
        <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle box">
                <img
                  src={picture.large}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle box">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle box">
                {phone}
              </td>
              <td data-th="Email" className="align-middle box">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="align-middle box">
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (<></>
      )}
    </tbody>

    )
}
export default DataDetail