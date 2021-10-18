import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const footballApiHeaders = {
	'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
	'x-rapidapi-key': 'b4d655f2ccmshe85c961f3a5e5a0p104abcjsn55d94e90fd88'
}

const baseUrl = 'https://api-football-beta.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: footballApiHeaders });

export const footballApi = createApi({
	reducerPath: 'footballApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getStandings: builder.query({
			query: (id) => createRequest(`standings?season=2021&league=${id}`),
		}),
		getPlayers: builder.query({
			query: (id) => createRequest(`players/topscorers?season=2021&league=${id}`),
		}),
	}),
});

export const { useGetStandingsQuery, useGetPlayersQuery } = footballApi;