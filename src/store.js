import { configureStore } from "@reduxjs/toolkit";

import { newsApi } from "./services/news-api";
import { footballApi } from "./services/football-api";

export default configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		[footballApi.reducerPath]: footballApi.reducer,
	},
});