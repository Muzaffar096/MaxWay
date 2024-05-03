import Image from "next/image";
import products from "../../data/product.json";
import Button from "../Button/Button";

const Menu = () => {
  return (
    <div className="mb-20">
      <div>
        <h3 className=" text-3xl font-bold mb-5">Aksiya 2+1</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i < 2 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍟🍔🥤Maxi BOX</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 1 &&
              i < 6 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🥪Klab-Sendvich</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 5 &&
              i < 8 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🌯Lavash</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 7 &&
              i < 10 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🌮Shaurma</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 9 &&
              i < 12 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🫔Panini</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 11 &&
              i < 13 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍔Burger</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 12 &&
              i < 16 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍱Donar Kebab</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 15 &&
              i < 19 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🌭Hot-Dog</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 18 &&
              i < 23 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍟Gazaklar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 22 &&
              i < 29 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍚Tamaddilar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 28 &&
              i < 31 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🍰Desertlar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 30 &&
              i < 35 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🥤Ichimliklar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 34 &&
              i < 44 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <p className=" text-slate-600">{menu.text}</p>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className="mt-10">
        <h3 className=" text-3xl font-bold mb-5">🥫Souslar</h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 43 && (
                <div
                  className=" max-w-[300px] rounded-xl shadow-lg"
                  key={menu.id}
                >
                  <Image
                    className=" rounded-t-xl h-[200px]"
                    src={menu.image}
                    alt="Image"
                    width={300}
                    height={200}
                  />
                  <div className=" px-3">
                    <h4 className=" text-xl font-semibold py-3">
                      {menu.title}
                    </h4>
                    <div className="flex justify-between md:flex-col py-4 items-center">
                      <span className=" text-xl font-bold">
                        {menu.price} so'm
                      </span>
                      <Button>Qo'shish</Button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
