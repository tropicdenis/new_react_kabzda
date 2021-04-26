import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect demo",
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample");
    // const initValue = useMemo(generateData, [])
    useEffect(() => {
        console.log("UseEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("UseEffect only first time(componentDidMount)");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("UseEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}
export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample");

    useEffect(() => {

       const intervalId = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        Hello, counter - {counter}; fake - {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("Component rendered with " + counter);

    useEffect(() => {
        console.log("Effect occurred" + counter)

        return () => {console.log("Reset Effect" + counter)}
    }, [counter])

    const increase = ()  => {setCounter(counter+1)};

    return <>
        Hello, counter: {counter};
        <button onClick={increase}>+</button>
    </>
}
export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log("Component rendered with " + text);

    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            console.log(e.key)
            setText(text + e.key)
        })
        return () => {
            window.removeEventListener('keypress', (e) => {
                console.log(e.key)
                setText(text + e.key)
            })
        }
    }, [text])

    return <>
        Typed text: {text};
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log("Component rendered with " + text);

    useEffect(() => {
       const timeoutId = setTimeout(()=>{
           setText('3 seconds passed')
       }, 3000)
        return () => {
           clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        Typed text: {text};
    </>
}