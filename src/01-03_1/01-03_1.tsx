import React from "react";


type LessonsType = {
    title: number;
}

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: {
        street: {
            title: string,
        }
    }
}

type PropsType = {
    title: string,
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    let {name, age} = man;

    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
            <div>
                {props.food}
            </div>
        </div>
    )
}