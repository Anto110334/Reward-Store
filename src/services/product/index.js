import { productsEndpoint, header } from '../../config/config';

export const productsData = async () => {
  const res = await fetch(`${productsEndpoint.url}`, { headers: header });
  const data = await res.json();
  return data;
}
