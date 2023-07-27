import { useState } from 'react'
import './App.css'

/*
- Component
- Properties + optional properties
- State
- State update - Render
- List render (map)
- Conditionals - condition ? JSX : null
- Callback
 */

type CounterProps = {
    title?: string;
    count: number;
    setCount: (n: number) => void;
}

function Counter(props: CounterProps) {
    return (
        <>
            {props.title ? <h3>{props.title}</h3> : null}

            <div className="card">
                <button onClick={() => {
                    props.setCount(props.count + 1);
                }}>
                    count is {props.count}
                </button>

                {(props.count > 5) ? <p>The count is greater than 5</p> : null}

                {props.count > 5 && <p>The count is greater than 5</p>}
            </div>
        </>
    )
}

type CounterDisplayProps = {
    count: number;
}

function CounterDisplay(props: CounterDisplayProps) {
    return <h1>{props.count}</h1>
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <CounterDisplay count={count}/>
            <Counter count={count} setCount={(count) => setCount(count)}/>
        </>
    );
}

export default App
