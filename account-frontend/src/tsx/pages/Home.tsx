// import crypto from "crypto";
import React, { useState, useRef } from "react";
import { Page, InputDiv } from "../subcomponents";

function SignIn(props: any) {
  const _signin_form = useRef();
  const [_name, changeName] = useState({});
  const [_password, changePassword] = useState({});

  async function handleSubmit() {
    const state = { _name, _password };

    await fetch("http://127.25.0.1:8080", {
      method: "POST",
      body: JSON.stringify(state),
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <form
          ref={_signin_form}
          id="signinform"
          // action=""
          onSubmit={handleSubmit}
          className="bg-[gray] text-black p-2 rounded-2"
        >
          <InputDiv>
            <label htmlFor="name">UserName</label>
            <input
              id="name"
              type="text"
              defaultValue="Name"
              onChange={(e) => {
                e.preventDefault();
                changeName(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              defaultValue=""
              onChange={(e) => {
                e.preventDefault();
                changePassword(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv className="p-1">
            <button className="bg-[lightblue] p-2 " type="submit">
              Submit
            </button>
          </InputDiv>
        </form>
      </div>
    </>
  );
}

export default function Home() {
  // const {children} = props;

  return (
    <Page>
      <div>Home</div>

      <SignIn />
    </Page>
  );
}
