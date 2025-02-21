import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";
// import Header from "./Header";

const Hooks = () => {
  //   const [count, setCount] = useState(0);
  //     const[number,setNumber]=useState(0);
  //   // const[ren,setRen]=useState(0);
  //   const ren = useRef();
  //useREF Hooks
  // useEffect(()=>{
  //     // setRen(prev=>prev+1);
  //     ren.current = ren.current + 1;

  // },[count])
  // function btnClick(){
  //     console.log(ren.current);
  //     ren.current.style.width="350px";

  // }

  //   function cubeNum(){
  //     console.log('Calculation Done');

  //     return Math.pow(number,3);
  //   }

  //   const result = useMemo(()=>cubeNum(number),[number])

  // const UseCallBack = useCallback(()=>{

  // },[])

  //UseReducer
  const initialSate = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increse": {
        return { count: state.count + 1 };
      }
      case "Decrese": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialSate);

  return (
    <div className="flex flex-col justify-center items-center mt-5 ">
      <h1>Hello Hooks</h1>
      {/* userRef hook */}
      {/* <h1>userRef hook </h1> */}

      {/* <button className='bg-sky-500 hover:bg-sky-700 p-2'onClick={()=>{setCount(prev=>prev+1)}} >+1</button>
      <h1>{count}</h1>
      <button className='bg-sky-500 hover:bg-sky-700 p-2'onClick={()=>{setCount(prev=>prev-1)}} >-1</button> */}
      {/* <input type='text' placeholder='Input' className='border-2 pl-2 mb-2'ref={ren}/>
      <button className='bg-sky-500 hover:bg-sky-700 p-2 'onClick={btnClick} >Click</button> */}

      {/* <h1>useMemo Hook</h1>
      <input type="number" placeholder="" className="border-2 pl-2 mb-2" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <h1>Cube of the Number :{result} </h1>
      <button
        className="bg-sky-500 hover:bg-sky-700 p-2"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <h1>{count}</h1>
      <button
        className="bg-sky-500 hover:bg-sky-700 p-2"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -1
      </button> */}

      {/* <Header UseCallBack={UseCallBack}/>
      <div>
      <h1>{count}</h1>
      <button className='bg-sky-500 hover:bg-sky-700 p-2'onClick={()=>{setCount(prev=>prev+1)}} >+1</button>
      </div> */}

      <div className=" flex flex-col border-2 p-2 ">
        <h1 className="text-center">Use Reducer</h1>
        <h1 className="text-center font-bold">{state.count}</h1>
        <div className=" flex flex-row m-auto p-">
          <button
            className="bg-sky-500 hover:bg-green-700 text-white mr-2 p-2"
            onClick={() => dispatch({ type: "Increse" })}
          >
            Increse
          </button>
          <button
            className="bg-sky-500 hover:bg-green-700 text-white p-2"
            onClick={() => dispatch({ type: "Decrese" })}
          >
            Decrese
          </button>
        </div>

        <input
          className="text-center font-bold border-2 m-2"
          value={state.count}
         
          onChange={(e) =>dispatch({type:'input', payload:Number(e.target.value)})}
          type="number"/>
      </div>
    </div>
  );
};

export default Hooks;
