import { redeemEndpoint, header } from '../../config/config';

const redeemData = async () => {
	const res = await fetch(`${redeemEndpoint.url}`, { headers: header });
	const data = await res.json();
	return data;
}

export default redeemData;
