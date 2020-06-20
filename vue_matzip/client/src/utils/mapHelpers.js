import axios from "axios";

const key = "AIzaSyAKF8jdoE3TKYkfPdUDPZuEG7emVWMHJis";

export const getAddress = async ({ lat, lng }) => {
  try {
    const GET_ADDRESS_URI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`;
    const {
      data: { results },
    } = await axios.get(GET_ADDRESS_URI);
    const address = results[0].formatted_address;
    return address;
  } catch (error) {
    console.log(error);
  }
};

export const getCoords = async (address) => {
  try {
    const GET_COORDS_URI = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
    const {
      data: { results },
    } = await axios.get(GET_COORDS_URI);
    return {
      address: results[0].formatted_address,
      lat: results[0].geometry.location.lat,
      lng: results[0].geometry.location.lng,
    };
  } catch (error) {
    console.log(error);
  }
};
