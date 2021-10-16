import { configureStore } from "@reduxjs/toolkit";

import { newsApi } from "./services/news-api";

export default configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
	},
});