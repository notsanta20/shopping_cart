import { useState } from "react";

export default function Cards({ itemData, addToCart, cart, decSize, incSize }) {
  function CartButton({ i }) {
    const item = cart.filter((x) => x.title === i.title);
    if (item.length === 1) {
      return (
        <div className="flex gap-2 text-xl">
          <div onClick={() => decSize(item[0])} className="cursor-pointer">
            -
          </div>
          <div className="text-xl">| {item[0].size} |</div>
          <div onClick={() => incSize(item[0])} className="cursor-pointer">
            +
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="add-cart w-[30px] cursor-pointer"
          onClick={() => addToCart(i)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
          </svg>
        </div>
      );
    }
  }

  function GenerateCard({ data }) {
    return (
      <div className="card text-lg" key={data.id}>
        <div className="card-img flex items-center rounded-[10px]">
          <img src={data.image} alt="" />
        </div>
        <div className="card-title text-center flex-1">{data.title}</div>
        <div className="card-text flex">
          <div className="card-price flex-1">{data.price}$</div>
          <CartButton i={data} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card-container">
        {itemData.map((item) => {
          if (item.id > 1) {
            if (
              item.category === `men's clothing` ||
              item.category === `women's clothing`
            ) {
              return <GenerateCard data={item} />;
            }
          }
        })}
      </div>
    </>
  );
}
