"use client";
import products from "../../data/product.json";
import Products from "../Products/Products";

const Menu = ({ menu }) => {
  return (
    <div className="mb-20">
      <div>
        <h3 className=" text-3xl font-bold mb-5">🎉Aksiya 2+1</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) => i < 2 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍟🍔🥤Maxi BOX</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 1 && i < 6 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🥪Klab-Sendvich</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 5 && i < 8 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🌯Lavash</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 7 && i < 10 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🌮Shaurma</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 9 && i < 12 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🫔Panini</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 11 && i < 13 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍔Burger</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 12 && i < 16 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍱Donar Kebab</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 15 && i < 19 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🌭Hot-Dog</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 18 && i < 23 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍟Gazaklar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 22 && i < 29 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍚Tamaddilar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 28 && i < 31 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍰Desertlar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 30 && i < 35 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🥤Ichimliklar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 34 && i < 44 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🥫Souslar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) => i > 43 && <Products menu={menu} key={menu.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
