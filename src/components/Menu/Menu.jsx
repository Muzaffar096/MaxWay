"use client";
import { motion } from "framer-motion";
import products from "../../data/product.json";
import { MProducts } from "../Products/Products";

const customAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.08 },
  }),
};
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.08 },
  }),
};

const Menu = ({ menu }) => {
  return (
    <motion.div className="mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
      >
        <motion.h3
          custom={1}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🎉Aksiya 2+1
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i < 2 && (
                <MProducts
                  custom={2}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={3}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🍟🍔🥤Maxi BOX
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 1 &&
              i < 6 && (
                <MProducts
                  custom={4}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={5}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🥪Klab-Sendvich
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 5 &&
              i < 8 && (
                <MProducts
                  custom={6}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={7}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🌯Lavash
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 7 &&
              i < 10 && (
                <MProducts
                  custom={8}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={9}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🌮Shaurma
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 9 &&
              i < 12 && (
                <MProducts
                  custom={10}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={11}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🫔Panini
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 11 &&
              i < 13 && (
                <MProducts
                  custom={12}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={13}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🍔Burger
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 12 &&
              i < 16 && (
                <MProducts
                  custom={14}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={15}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🍱Donar Kebab
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 15 &&
              i < 19 && (
                <MProducts
                  custom={16}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.03, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={17}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🌭Hot-Dog
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 18 &&
              i < 23 && (
                <MProducts
                  custom={18}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.01, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={19}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🍟Gazaklar
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 22 &&
              i < 29 && (
                <MProducts
                  custom={20}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.01, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={21}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🍚Tamaddilar
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 28 &&
              i < 31 && (
                <MProducts
                  custom={22}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.01, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={23}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🍰Desertlar
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 30 &&
              i < 35 && (
                <MProducts
                  custom={24}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.01, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={25}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🥤Ichimliklar
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 34 &&
              i < 44 && (
                <MProducts
                  custom={26}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.01, once: true }}
        className="mt-10"
      >
        <motion.h3
          custom={27}
          variants={textAnimation}
          className=" text-3xl font-bold mb-5"
        >
          🥫Souslar
        </motion.h3>
        <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {products.map(
            (menu, i) =>
              i > 43 && (
                <MProducts
                  custom={28}
                  variants={customAnimation}
                  menu={menu}
                  key={menu.id}
                />
              )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
