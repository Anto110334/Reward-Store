import { pointsEndpoint, header } from '../../config/config';

const pointsData = async (amount) => {
	const res = await fetch(`${pointsEndpoint.url}`, 
	{
		method: 'POST',
		mode: 'cors',
		headers: header,
		body: JSON.stringify({
			'amount': amount
		  })
	  });
	const data = await res.json();
	return data;
}

export default pointsData;
