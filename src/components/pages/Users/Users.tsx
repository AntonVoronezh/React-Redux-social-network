import React from "react";
import { Loader, Pagination } from "semantic-ui-react";

import User from "../../elements/User/User";

type Props = {
  followCB: () => any;
  unfollowCB: () => any;
  isLoading: boolean;
  users: any[];
  error: { message: string };
  paginationCount: number;
  page: number;
  setPageNumberCB: (num: number) => any;
  paginationHandlerCB: (num: number) => any;
  status: string;
};

const Users: React.FC<Props> = ({
  followCB,
  unfollowCB,
  isLoading,
  users: data,
  error,
  paginationCount,
  page,
  setPageNumberCB,
  paginationHandlerCB,
  status,
}) => {
  let users, result, pagination;

  const paginationChangeHandler = ({ currentTarget }: any): void => {
    const number = Number(currentTarget.childNodes[0].data);

    setPageNumberCB(number);
    paginationHandlerCB(number);
  };

  !error
    ? (users = data.map((u) => {
        return (
          <User
            key={u.id}
            {...u}
            followCB={followCB}
            unfollowCB={unfollowCB}
            status={status}
          />
        );
      }))
    : (users = `Ошибка "${error.message}". Попробуйте еще раз.`);

  isLoading
    ? (result = (
        <Loader size="large" active>
          Loading
        </Loader>
      ))
    : (result = users);

  isLoading
    ? (pagination = null)
    : (pagination = (
        <Pagination
          defaultActivePage={page}
          totalPages={paginationCount}
          onPageChange={(data) => paginationChangeHandler(data)}
          firstItem={null}
          lastItem={null}
          prevItem={null}
          nextItem={null}
        />
      ));

  return (
    <React.Fragment>
      {pagination}
      {result}
    </React.Fragment>
  );
};

export default Users;
