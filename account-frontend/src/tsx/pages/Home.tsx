// import crypto from "crypto";
import React, { useRef } from "react";
import { Page, InputDiv } from "../subcomponents";

type ev = React.ChangeEvent<HTMLInputElement>;

class InputData {
  e: ev;

  val = function (): string {
    this.e.preventDefault();
    const v = this.e.target.value;
    if (v.length <= 2) throw Error("input value too short");
    return v;
  };
  update = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.e = e;
  };
}

function SignIn(props: any) {
  const _signin_form = useRef();
  const _name = new InputData();
  const _password = new InputData();

  async function handleSubmit() {
    const state = {
      form: "sign_in",
      _name: _name.val(),
      _password: _password.val(),
    };

    /*
    const options = {
      method: method,
      headers:{'content-type': 'application/json'},
      mode: 'no-cors'
    };

    options.body = JSON.stringify(body);

    return fetch(url, options);
    */

    await fetch("/accounts/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(state),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div id="signinmodal" className="flex w-full items-center justify-center">
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
                _name.update(e);
              }}
            />
          </InputDiv>
          <InputDiv>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              defaultValue=""
              onChange={(e) => _password.update(e)}
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
