import { historyEndpoint, header } from '../../config/config';

const historyData = async () => {
	const res = await fetch(`${historyEndpoint.url}`, { headers: header });
	const data = await res.json();
	return data;
}

export default historyData;
