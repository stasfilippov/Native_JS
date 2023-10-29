import { ManType } from "./01-03";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Mam',
        age: 32,
        lessons: [{title: 1}, {title: 2}],
        address: {
            street: {
                title: 'Happy street',
            }
        }
    }

})

test ('should be man', () => {

    const {age, lessons} = props;


    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
})


test ('should be array', () => {
    const [l1, l2] = props.lessons;

    expect(l1.title).toBe(1);
    expect(l2.title).toBe(2);

})