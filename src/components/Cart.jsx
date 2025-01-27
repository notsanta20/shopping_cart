import { Link } from "react-router";
import { format } from "date-fns";

export default function Cart({ items, removeItem }) {
  let sum = items.reduce((prev, { price }) => prev + price, 0);
  const date = format(new Date(), `MMM dd, yyyy`);
  sum = Math.round((sum + Number.EPSILON) * 100) / 100;
  if (items.length === 0)
    return (
      <div>
        <h1>CART</h1>
        <div className="text-center">
          <h2 className="text-2xl">No items added in Cart</h2>
          <Link to={"/Shop"}>Shop</Link>
        </div>
      </div>
    );

  return (
    <div>
      <h1>CART</h1>
      <div className="cart-container">
        <div className="cart-cards justify-self-center">
          {items.map((item) => {
            return (
              <div className="cart-card flex text-lg gap-5 items-center">
                <div className="cart-img">
                  <img src={item.image} />
                </div>
                <div className="cart-title flex-1">{item.title}</div>
                <div className="cart-price">{item.price} $</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(226,70,70,1)"
                  className="w-[25px] cursor-pointer"
                  onClick={() => removeItem(item)}
                >
                  <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                </svg>
              </div>
            );
          })}
        </div>
        <div className="cart-invoice text-xl">
          <div className="invoice-header text-2xl">
            <div className="text-center">Invoice</div>
            <div>ORDER #0069</div>
            <div>{date}</div>
          </div>
          <div className="invoice-main flex-1">
            <div className="invoice-cart text-xl">
              {items.map((i) => {
                return (
                  <>
                    <div className="invoice-item flex gap-5">
                      <div className="flex-1">{i.title}</div>
                      <div>{i.price}$</div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="invoice-total flex">
              <div className="flex-1">TOTAL</div>
              <div>{sum}$</div>
            </div>
          </div>
          <div className="invoice-footer text-center">
            <div className="bar-code text-7xl">NotSanta20</div>
            <div>RETAIN THIS COPY FOR YOUR RECORDS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
