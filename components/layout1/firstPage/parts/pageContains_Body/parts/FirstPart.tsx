import React from "react";

const FirstPart = () => {
  return (
    <div>
      <h2 className="text-center font-bold pt-8" style={{}}>
        LET&apos;S GET STARTED
      </h2>
      <p className="text-center pt-2">
        Choose an activity to build your vocabulary
      </p>
      <div className="flex flex-wrap sm:flex-nowrap justify-evenly overflow-hidden items-center  mt-4 gap-3">
        <SideCard
          button="Find a list"
          description="Find a list for the book you're reading or a topic your learning"
          image="https://cdn.vocab.com/images/icons/o-list-blue-grey-n5bnpk.svg"
          link="/"
          title="Browse lists"
        />
        <div className="w-full sm:w-auto order-[-1] sm:order-[0]">
          <MeddleCard />
        </div>

        <SideCard
          button="Join a jam"
          description="Answer questions quickly to compete against others and win"
          image="https://cdn.vocab.com/images/icons/o-trophy-blue-grey-kqcan6.svg"
          link="/"
          title="Join a Jam"
        />
      </div>
    </div>
  );
};
export default FirstPart;

const SideCard = ({
  title,
  description,
  image,
  link,
  button,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  button: string;
}) => {
  return (
    <div className="flex-col max-w-40 justify-center items-center flex p-2 py-3 gap-1">
      <h5 className="text-customBlue font-bold text-center">{title}</h5>
      <p className="text-center">{description}</p>
      <a
        href={`${link}`}
        className="inline-block w-28 h-28"
        style={{
          background: `url('${image}') no-repeat center center`,
          backgroundSize: "5rem 5rem",
        }}
      ></a>

      <a className="btn" href="/">
        {button}
      </a>
    </div>
  );
};

const MeddleCard = () => {
  return (
    <div
      className="flex-col max-w-96 justify-center items-center flex m-auto p-3 py-5 gap-6"
      style={{
        background:
          "#0059fb url('https://cdn.vocab.com/images/learner/bg-tile-play-challenge-17rqpg4.svg') no-repeat 50% 100%",
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
        borderRadius: "12px",
        color: "#ffff",
      }}
      // className="flex-col max-w-96 justify-center items-center flex"
    >
      <h5 className="text-white font-bold text-center">Train your brain!</h5>
      <p className="text-center hidden sm:block">
        Pump up your vocabulary with VocabTrainer™.
      </p>
      <a
        href="/"
        className="inline-block w-28 h-28"
        style={{
          background:
            "#189eff url('https://cdn.vocab.com/images/icons/dumbbell-fff-kvtu2f.svg') no-repeat center center",
          backgroundSize: "5rem 5rem",
          borderRadius: "50%",
        }}
      ></a>
      <a
        className="bg-green-700 text-white font-normal h-10 leading-10 px-6 rounded-md inline-block no-underline text-center "
        href="/"
      >
        Start training
      </a>
      <a
        className=" text-white hidden sm:block font-normal h-10 leading-10 px-6 rounded-md no-underline text-center "
        href="/"
      >
        Learn more
      </a>
    </div>
  );
};
