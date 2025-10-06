import type { APIRoute } from 'astro';

export const prerender = false;

const toJson = (value: any) => {
	return JSON.stringify(value, null, 2);
};

export const GET: APIRoute = ({ params, request }) => {
	const { thing, id } = params;

	return new Response(toJson({
		path: new URL(request.url).pathname,
		params: { thing, id }
	}));
};