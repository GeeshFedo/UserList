import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { userAPI } from "./api/userAPI";

const store = configureStore({
    reducer: {
      [userAPI.reducerPath]: userAPI.reducer
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(userAPI.middleware);
    },
  });
  
  setupListeners(store.dispatch);
  
  export default store;
  
  export { useFetchUsersQuery, useDeleteUsersMutation } from "./api/userAPI";