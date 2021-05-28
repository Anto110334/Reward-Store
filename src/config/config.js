export const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
}

const baseURL = 'https://coding-challenge-api.aerolab.co';

export const productsEndpoint = {
  url: `${baseURL}/products`
}

export const userEndpoint = {
  url: `${baseURL}/user/me`
}

export const pointsEndpoint = {
  url: `${baseURL}/user/points`
}

export const historyEndpoint = {
  url: `${baseURL}/user/history`
}

export const redeemEndpoint = {
  url: `${baseURL}/redeem`
}
