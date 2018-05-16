import React from 'react';

const StatsData = ({ users }) => {

  return (
    <ul className="collection">
      {users.map((user, index) => {
        return (
          <li className="collection-item" key={index} >
            <p>{user.ip}</p>
            <p>{user.device}</p>
            <p>{user.timestamp}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default StatsData;