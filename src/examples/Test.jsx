import { useEffect, useState } from "react";

const Test = (props) => {
    const { name } = props;
    const [age, setAge] = useState(0);

    useEffect(() => {
        setAge('pildo')
    }, [])

    return (
        <div>
            Example for test: My name {name} with age {age}
        </div>
    )
}

export default Test;