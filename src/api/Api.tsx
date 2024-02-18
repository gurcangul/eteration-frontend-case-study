import axios from "axios";
import { ICard } from "../models/product";

export const getData  = async () => {
  const apiUrl = 'https://5fc9346b2af77700165ae514.mockapi.io/products';

  return await axios.get<ICard[]>(apiUrl);

}