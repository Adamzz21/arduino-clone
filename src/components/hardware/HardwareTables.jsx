import React from "react";

export default function HardwareTables({ Tables }) {
  return (
    <div>
      <div className="hardware-table">
        {Tables.map((Table) => (
          <table>
            <thead>
              <tr>
                {Tables.map((data, index) => (
                  <th key={index}>
                    <div className="table-image">
                      <img src={data.image} alt="" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Table.map((data, index) => (
                  <td key={index}>
                    <a href={data.path}>{data.title}</a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}
