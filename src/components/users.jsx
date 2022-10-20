import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";
import UserTable from "./userTable";
import _ from "lodash";

const Users = () => {
  const pageSize = 8;
  const [activePage, setActivePage] = useState(1);
  const [professions, setProfessions] = useState();
  const [activeProfession, setActiveProfession] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const [users, setUsers] = useState();
  const [activeHeader, setActiveHeader] = useState();
  const handleActiveHeader = (id) => {
    setActiveHeader(id);
  };

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);
  useEffect(() => {
    setActivePage(1);
  }, [activeProfession]);

  const handleActiveProfession = (id) => {
    setActiveProfession(id);
  };

  const handleActivePage = (pageIndex) => {
    setActivePage(pageIndex);
  };
  const handleSort = (item) => {
    setSortBy(item);
  };

  if (users) {
    const filteredUsers = activeProfession
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(activeProfession)
        )
      : users;

    const usersLength = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

    const usersCrop = paginate(sortedUsers, activePage, pageSize);
    const cleanFilter = () => {
      setActiveProfession();
    };
    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              items={professions}
              activeItem={activeProfession}
              onItem={handleActiveProfession}
            />
            <button className="btn btn-secondary m-2" onClick={cleanFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={usersLength} />
          {usersLength > 0 && (
            <UserTable
              users={usersCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggle={handleToggleBookmark}
              activeHeader={activeHeader}
              onHeader={handleActiveHeader}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              pageSize={pageSize}
              usersLength={usersLength}
              activePage={activePage}
              onPage={handleActivePage}
            />
          </div>
        </div>
      </div>
    );
  }
  return "loading...";
};

export default Users;
