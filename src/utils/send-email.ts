import { FormDataOrder } from "../components/Cart/Cart";
import { FormData } from "../components/ContactsForm/ContactsForm";

export const sendEmail = (data: FormData | FormDataOrder) => {
    const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
};