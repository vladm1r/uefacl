import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'x-rapidapi-key': 'b4d655f2ccmshe85c961f3a5e5a0p104abcjsn55d94e90fd88'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getNews: builder.query({
			query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;