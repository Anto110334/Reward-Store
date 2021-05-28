import { pointsEndpoint, header } from '../../config/config';

const pointsData = async () => {
	const res = await fetch(`${pointsEndpoint.url}`, { headers: header });
	const data = await res.json();
	return data;
}

export default pointsData;
