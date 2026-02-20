import { Link } from "react-router-dom";

export default function ProductPage({ products }) {
  return (
    <>
      <section className="sec-prod">
        <div className="div-prod">
          {products.map((el) => {
            return (
              <div key={el.id} className="card-prod">
                <Link to={"/products/" + el.id} className="link-single-card">
                  <h2>{el.title}</h2>
                  <div className="div-image-prod">
                    <figure>
                      <img src={el.image} alt={el.description} />
                    </figure>
                  </div>
                  <p>{el.price + " $"}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
