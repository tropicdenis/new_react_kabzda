import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: "digital" | "analog"
};

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick');
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalID) // Вызовется один раз, когда умрёт компонента Clock
        }
    }, []);

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }


    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
   date: Date
}

