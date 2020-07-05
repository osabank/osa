import React from 'react';
import './Apply.css';

class ApplyForLoan extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Apply For A Loan</h1>
          <label>Choose A Date</label>
          <div>
            <input className="amount" type="date" placeholder="Date"></input>
          </div>
          <label>Choose A Time</label>
          <div className="box">
            <select>
              <option>08:00 AM- 12:00 AM</option>
              <option>01:00 PM- 05:00 PM</option>
            </select>
          </div>
          <label>Where?</label>
          <div className="box">
            <select>
              <option>Tunis - Ghazella</option>
              <option>Tunis - Ben Arous</option>
              <option>Sousse</option>
              <option>Mahdia</option>
            </select>
          </div>
          <button className="calculate">Make An Appointement</button>
        </div>
      </div>
    );
  }
}

export default ApplyForLoan;
