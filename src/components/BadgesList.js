import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
class BadgesList extends React.Component {
  render() {
    console.log(this.props.badges);
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningun badge</h3>
          <Link className="btn btn-primary" to="badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <img
                  src={badge.avatarUrl}
                  alt=""
                  className="BadgesListItem__avatar"
                />
                <div>
                  <div>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                  </div>
                  <div className="Twitter__name">
                    <span className="Twitter__logo"></span>@{badge.twitter}
                  </div>
                  <div>{badge.jobTitle}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
