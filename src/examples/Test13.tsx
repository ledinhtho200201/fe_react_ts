interface IProps {
    name?: string,
    age?: number,
    address?: string
}

const Test13 = (props: IProps) => {
    //props là javascript object
    const { name = "defaul value", age, address } = props;
    // const person = {
    // name: 'Pildo',
    //     age: 25,
    //     address: 'Learn IT'
    // }

    return (
        <div>
            Example in Test13 13 - hello word {name}
        </div>
    )
}

export default Test13;