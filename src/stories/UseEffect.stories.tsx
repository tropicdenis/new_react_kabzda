import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect demo",
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample");
    // const initValue = useMemo(generateData, [])
   useEffect(()=>{
       console.log("UseEffect every render");
       document.title = counter.toString();
   })

    useEffect(()=>{
       console.log("UseEffect only first time(componentDidMount)");
       document.title = counter.toString();
   }, [])

    useEffect(()=>{
       console.log("UseEffect first render and every counter change");
       document.title = counter.toString();
   }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}