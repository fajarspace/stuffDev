import TypeIt from "typeit-react";


export default function Hero() {
  return (
    <>
      <h2>
        <TypeIt
          options={{
            strings: ["Make it easy to create responsive but minimalist web pages. "],
            speed: 50,
            waitUntilVisible: true,
          }}
        >
        </TypeIt>
      </h2>
    </>

  );
};