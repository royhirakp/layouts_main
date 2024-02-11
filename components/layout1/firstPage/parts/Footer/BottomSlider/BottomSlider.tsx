// import MainContainer from "@/components/container/MainContainer";
import React from "react";
import MainContainer from "../../Container/MainContainer";

const BottomSlider = () => {
  return (
    <div>
      <div className="min-h-dvh">
        <MainContainer>
          <div className="flex h-96 gap-3 my-3">
            <section className="w-[70%] flex justify-center items-center border-2 border-red-950">
              <h1 className="text-3xl">CONTAINS</h1>
            </section>
            <section className="w-[30%] pt-5 border-2 border-red-950 flex flex-col gap-2 items-center">
              <h1 className="underline decoration-solid text-center mt-10">
                My Account
              </h1>
              <ul>
                <li className="decoration-solid hover:text-white ">
                  <a href="/">logout</a>
                </li>
                <li>
                  <a className="decoration-solid hover:text-white " href="/">
                    My learning
                  </a>
                </li>
                <li>
                  <a className="decoration-solid hover:text-white " href="/">
                    progress
                  </a>
                </li>
                <li>
                  <a className="decoration-solid hover:text-white " href="/">
                    Account settings
                  </a>
                </li>
                <li>
                  <a className="decoration-solid hover:text-white " href="/">
                    MyList
                  </a>
                </li>
                <li>
                  <a className="decoration-solid hover:text-white " href="/">
                    MyList
                  </a>
                </li>
                <li>
                  <a className="decoration-solid hover:text-white " href="/">
                    MyList
                  </a>
                </li>
                <li>
                  <a className="decoration-solid hover:text-white " href="/">
                    MyList
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="py-36 text-center text-3xl text-red-400 border-2 border-red-950">
            section 1
          </div>
          <div className="py-36 text-center text-3xl text-red-400 border-2  border-red-950 my-3">
            section 2
          </div>
        </MainContainer>
      </div>
      <footer className="py-16 bg-slate-500 text-center text-4xl text-white">
        <MainContainer>footer container</MainContainer>
      </footer>
    </div>
  );
};

export default BottomSlider;
