import { useEffect, useState } from "react";
import './Test10.css';

export interface IUsers {
    name?: string,
    age?: number | string,
    city?: string
}

interface IProps {
    defaultName: string,
    defaultAge: number | string,
    city?: string
}

const Test10 = (props: IProps) => {
    const { defaultName, defaultAge } = props;
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội");

    const [users, setUsers] = useState<IUsers[]>([])

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity
        }
        setUsers([...users, user]);
        setAge('');
        setName('');
    }

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={handleOnChangeName}
                    /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    /><br />
                </div>
                <div>
                    <label >City: </label><br />
                    <select

                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        {city && city.map(item => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input type="submit" value="Submit"
                    onClick={handleSubmit}
                />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length > 0 && users.map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Test10;