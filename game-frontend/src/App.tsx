import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import { Account, Home, Blog, Contact, NoPage } from "./tsx/pages";


type LayoutProps = {
  Links: string[]
}

const Layout = (props:LayoutProps) => {
  const {Links} = props;
  const l = (txt:string)=>{
    return (
       <li className="p-2 mx-3">
            <Link to={`/${txt==='Home'?'':txt}`}>{`${txt}`}</Link>
          </li>
    )
  }
  return (
    <>
      <nav className="flex flex-row">
        <ul className="flex flex-row right-0">
          {Links.map(l)}
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Links={['Home','Blogs','Contact','Account']} />}>
          <Route index element={<Home />} />
          <Route path="Blogs" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Account" element={<Account/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

