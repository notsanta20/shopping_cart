import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <main className="flex flex-col items-center">
        <section className="home-container flex flex-col items-center">
          <div className="top flex">
            <div className="txt-rotate-1">BEST SELLER - W/S SEASON</div>
            <div className="home-img w-[300px]">
              <img src="../src/assets/images/home.png" />
            </div>
            <div className="txt-rotate-2">BEST SELLER - W/S SEASON</div>
          </div>
          <div className="stripe stripe-1">
            <div className="stripe-txt">
              BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER -
              STREET FASHION - WINTER SEASON - BEST SELLER - STREET FASHION -
              WINTER SEASON - BEST SELLER - STREET FASHION - WINTER SEASON -
              BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER -
              STREET FASHION - WINTER SEASON
            </div>
          </div>
          <div className="stripe stripe-2">
            <div className="stripe-txt">
              BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER -
              STREET FASHION - WINTER SEASON - BEST SELLER - STREET FASHION -
              WINTER SEASON - BEST SELLER - STREET FASHION - WINTER SEASON -
              BEST SELLER - STREET FASHION - WINTER SEASON - BEST SELLER -
              STREET FASHION - WINTER SEASON
            </div>
          </div>
          <div className="street-txt">
            <h2 className="street-solid">STREET</h2>
            <h2 className="street-outline">STREET</h2>
            <h2 className="street-solid">STREET</h2>
          </div>
        </section>
        <Link className="shop-now-btn text-4xl flex gap-3" to="/Shop">
          <div className="shop-btn-1">&gt;</div>
          <div className="shop-btn-2">&gt;</div>
          <div className="shop-btn-3">&gt;</div>
          <div className="text-center">SHOP NOW</div>
          <div className="shop-btn-3">&lt;</div>
          <div className="shop-btn-2">&lt;</div>
          <div className="shop-btn-1">&lt;</div>
        </Link>
        <section className="flex flex-col items-center gap-20">
          <div className="pop-txt">POPULAR GOODS</div>
          <div className="slider">
            <div className="list">
              <div className="item" style={{ "--position": 1 }}>
                <img src="../src/assets/images/1.png" />
              </div>
              <div className="item" style={{ "--position": 2 }}>
                <img src="../src/assets/images/2.png" />
              </div>
              <div className="item" style={{ "--position": 3 }}>
                <img src="../src/assets/images/3.png" />
              </div>
              <div className="item" style={{ "--position": 4 }}>
                <img src="../src/assets/images/4.png" />
              </div>
              <div className="item" style={{ "--position": 5 }}>
                <img src="../src/assets/images/5.png" />
              </div>
              <div className="item" style={{ "--position": 6 }}>
                <img src="../src/assets/images/6.png" />
              </div>
              <div className="item" style={{ "--position": 7 }}>
                <img src="../src/assets/images/7.png" />
              </div>
              <div className="item" style={{ "--position": 8 }}>
                <img src="../src/assets/images/8.png" />
              </div>
            </div>
          </div>
          <div className="scroll">
            <div className="scroll-list">
              <div class="scroll-txt">
                <p>BEST SELLER - STREET FASHION - WINTER SEASON</p>
                <p>BEST SELLER - STREET FASHION - WINTER SEASON</p>
                <p>BEST SELLER - STREET FASHION - WINTER SEASON</p>
              </div>
              <div class="scroll-txt">
                <p>BEST SELLER - STREET FASHION - WINTER SEASON</p>
                <p>BEST SELLER - STREET FASHION - WINTER SEASON</p>
                <p>BEST SELLER - STREET FASHION - WINTER SEASON</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
