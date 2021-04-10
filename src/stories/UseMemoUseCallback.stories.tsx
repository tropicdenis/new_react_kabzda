import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo17",
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                let fakeValue = Math.random()
            }
            tempResultA = tempResultA * i; // resultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i; // resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a = {resultA}
        </div>
        <div>
            Result for b = {resultB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newArray
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()];
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>addUser</button>

        {counter}
        <Users users={newArray}/>

    </>
}
export const LikeUseCallbackMemo = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const memoizedAddBook = useMemo(()=> {
        return () => {
            const newUsers = [...books, "Angular" + new Date().getTime()];
            setBooks(newUsers)
        }
    }, [books]);

    const memoizedAddBook2 = useCallback(()=> {
            const newUsers = [...books, "Angular" + new Date().getTime()];
            setBooks(newUsers)
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>

    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)