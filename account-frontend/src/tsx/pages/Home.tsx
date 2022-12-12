import React from "react";
import { Page, InputDiv } from "../subcomponents";

function SignIn(props: any) {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <form
          id="signinform"
          action=""
          method="post"
          className="bg-[gray] text-black p-2 rounded-2"
        >
          <InputDiv>
            <label htmlFor="name">UserName</label>
            <input id="name" type="text" defaultValue="Name" />
          </InputDiv>
          <InputDiv>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" defaultValue="" />
          </InputDiv>
          <InputDiv className="p-1">
            <button className="bg-[blue] p-2 ">Submit</button>
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
