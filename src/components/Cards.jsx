import React from 'react'

export const RestaurantCards = (Restaurant) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={Restaurant?.image}  alt='restaurant'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Restaurant?.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={'/restaurants'}>
          <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
