import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = "https://fakestoreapi.com/products/";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [dataCard, setDataCard] = useState();

  const fetchDataCard = () => {
    axios.get(baseUrl + id).then((res) => {
      setDataCard(res.data);
    });
  };

  useEffect(fetchDataCard, []);

  return dataCard ? <h2>{dataCard.title}</h2> : <h2>Caricamento...</h2>;
}
