import React , {useState} from 'react'

export default function Test() {
    const abc = window.location.search
    const [state, setstate] = useState(abc)
    return (
        <div>
            <h1>bonjour {state}</h1>
            <p>hhhhhhh</p>
        </div>
    )
}
