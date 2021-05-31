import { redeemEndpoint, header } from '../../config/config';

const redeemData = async (productId) => {
	const res = await fetch(`${redeemEndpoint.url}`, 
	{
		method: 'POST',
		mode: 'cors',
		headers: header,
		body: JSON.stringify({
			'productId': productId
		  })
	  });
	const data = await res.json();
	return data;
}

export default redeemData;
