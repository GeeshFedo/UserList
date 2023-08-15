import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../../config";

const userAPI = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: api.API_URL,
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      deleteUsers: builder.mutation({
        invalidatesTags: (result, error, arg) => {
            return [{ type: "User", id: arg.id }];
        },
        query: (id) => ({
            url: `/users/${id}`,
            method: 'DELETE',
            credentials: 'include',
          })
      }),
    };
  },
});
export { userAPI };
export const { useFetchUsersQuery, useDeleteUsersMutation } = userAPI;