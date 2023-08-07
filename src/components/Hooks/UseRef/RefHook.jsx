// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

// import { useEffect } from "react";
import { useRef } from "react";

// Accessing DOM elements
// const RefHook = () => {
//   const ele = useRef();

//   useEffect(() => {
//     const divElement = ele.current;
//     console.log(divElement);
//   }, []);

//   return (
//     <>
//       <div ref={ele}>I am div</div>
//     </>
//   );
// };

// export default RefHook;


// focusing on an input
// const RefHook = () => {
//     const inputRef = useRef()
//     useEffect(() => {
//          inputRef.current.focus()
//     },[])
//     return (
//         <>
//         <div>
//             <input type="text" placeholder="Type..." ref={inputRef} />
//         </div>
//         </>
//     )
//     }

// export default RefHook;


// Mutable value
const RefHook = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
  };
  console.log("I rendered");

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
};

export default RefHook;


