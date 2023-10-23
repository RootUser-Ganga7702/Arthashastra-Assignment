import React from "react";
import "./index.css";

class HtmlTable extends React.Component {
  render() {
    const dummyData = [
      { Id: 1, Year: 2004, Medals: 1 },
      {
        Id: 2,
        Year: 2008,
        Medals: 3,
      },
      {
        Id: 3,
        Year: 2012,
        Medals: 6,
      },
      {
        Id: 4,
        Year: 2016,
        Medals: 2,
      },
      {
        Id: 5,
        Year: 2020,
        Medals: 7,
      },
    ];

    return (
      <div className="pageBg-1">
        <h2 className="heading-1">HTML Table</h2>
        <table border="1" className="border-1">
          <thead>
            <tr className="thread-one">
              <th className="id-column">ID</th>
              <th className="year-column">Year</th>
              <th className="medals-column">Medals</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((row, index) => (
              <tr key={index}>
                <td className="id-row">{row.Id}</td>
                <td className="year-row">{row.Year}</td>
                <td className="medal-row">{row.Medals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HtmlTable;
