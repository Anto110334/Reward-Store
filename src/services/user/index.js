import { userEndpoint, header } from '../../config/config';

const userData = async () => {
	const res = await fetch(`${userEndpoint.url}`, { headers: header });
	const data = await res.json();
	return data;
}

export default userData;
