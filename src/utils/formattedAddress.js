import isEmpty from "./isEmpty";

const formattedAddress = (value) => {
    let suite = !isEmpty(value.suite) ? `${value.suite},` : '';
    let street = !isEmpty(value.street) ? `${value.street},` : '';
    let city = !isEmpty(value.city) ? `${value.city},` : '';
    let zipcode = !isEmpty(value.zipcode) ? `${value.zipcode}` : '';

    return `${suite} ${street} ${city} ${zipcode}`
  }
  
  export default formattedAddress;