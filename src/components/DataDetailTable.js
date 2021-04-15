import React from "react";
import DataDetail from "./DataDetail";

function DataDetailTable(headings, users, handleSort) {

    <table>
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>


        <DataDetail users={users}/>
    </table>
}
export default DataDetailTable;