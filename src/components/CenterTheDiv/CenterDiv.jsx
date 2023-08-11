// const CenterDiv = () => {
//   return (
//     <>
//       <div
//         style={{
//           border: "1px solid red",
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div style={{padding:"50px", background:"blue",color:"#ffff"}}>Hello i am a div</div>
//       </div>
//     </>
//   );
// };

// export default CenterDiv;

// const CenterDiv = () => {
//   return (
//     <>
//       <div
//         style={{
//           border: "1px solid red",
//           display:"grid",
//           padding:"200px",
//           justifyContent:"center"

//         }}
//       >
//         <div
//           style={{
//             background: "blue",
//             color: "#ffff",
//             textAlign: "center",
//             padding:"50px"
//           }}
//         >
//           Hello i am a div
//         </div>
//       </div>
//     </>
//   );
// };

// export default CenterDiv;

const CenterDiv = () => {
  return (
    <>
      <div
        style={{
          height: "200px",
          position: "relative",
          border: "3px solid green",
        }}
      >
        <div
          style={{
           position:"absolute",
           top:"50%",
           left:"50%",
           transform:"translate(-50%,-50%)"
          }}
        >
          Hello i am a div
        </div>
      </div>
    </>
  );
};

export default CenterDiv;
