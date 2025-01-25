export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <main className="home-container flex flex-col items-center">
        <div className="top flex">
          <div className="txt-rotate-1">BEST SELLER - W/S SEASON</div>
          <div className="home-img w-[300px]">
            <img src="../src/assets/images/home.png" />
          </div>
          <div className="txt-rotate-2">BEST SELLER - W/S SEASON</div>
        </div>
        <div className="stripe-1">
          <div className="stripe-txt">
            BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER - STREET
            FASHION - WINTER SEASON - BEST SELLER - STREET FASHION - WINTER
            SEASON - BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER
            - STREET FASHION - WINTER SEASON - BEST SELLER - STREET FASHION -
            WINTER SEASON{" "}
          </div>
        </div>
        <div className="stripe-2">
          <div className="stripe-txt">
            BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER - STREET
            FASHION - WINTER SEASON - BEST SELLER - STREET FASHION - WINTER
            SEASON - BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER
            - STREET FASHION - WINTER SEASON - BEST SELLER - STREET FASHION -
            WINTER SEASON{" "}
          </div>
        </div>
        <div className="street-txt text-3xl">
          <h2 className="street-txt-solid">STREET</h2>
          <h2 className="street-txt-outline">STREET</h2>
          <h2 className="street-txt-solid">STREET</h2>
        </div>
      </main>
    </>
  );
}
