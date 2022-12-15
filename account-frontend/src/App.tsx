import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import { Home, Game, Blog, NoPage, Account } from "./tsx/pages";

type LayoutProps = {
  Links: string[];
};

const Layout = (props: LayoutProps) => {
  const { Links } = props;
  const l = (txt: string) => {
    return (
      <li className="p-2 mx-3">
        <Link to={`/${txt === "Home" ? "" : txt}`}>{`${txt}`}</Link>
      </li>
    );
  };
  return (
    <>
      <nav className="flex flex-row">
        <div className=" flex items-center justify-center p-2">
          <i className="fa-solid fa-bars px-2"></i>

          <h1>Blackstar Monopoly</h1>
        </div>

        <div className="relative">
          <ul className="flex flex-row ">{Links.map(l)}</ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout Links={["Home", "Blog", "Game", "Account"]} />}
        >
          <Route index element={<Home />} />
          <Route path="Blogs" element={<Blog />} />
          <Route path="Game" element={<Game />} />
          <Route path="Account" element={<Account />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
