export interface Employee {
    name: string;
    surName: string;
    age: number;
    id: number;
    frontend: boolean;
    letter: string;
    level: "JUNIOR" | "SENIOR" | "STUDENT";
    avatar: string;
    date: string;
}

export const employees: Employee[] = [
    {
        id: 0,
        name: "Patrik",
        surName: "Simon",
        age: 18,
        letter: "a",
        frontend: true,
        level: "JUNIOR",
        avatar: "https://api.q-timer.com/sed-api/api/rest/photo/788",
        date: "2019-01-10T21:34Z",
    },
    {
        id: 1,
        name: "Gregor",
        surName: "Albert",
        age: 39,
        frontend: true,
        letter: "z",
        level: "SENIOR",
        avatar: "https://api.q-timer.com/sed-api/api/rest/photo/661",
        date: "2019-01-09T21:34Z",
    },
    {
        id: 2,
        name: "Csaba",
        surName: "Meszároš",
        level: "SENIOR",
        age: 26,
        frontend: false,
        letter: "d",
        avatar: "https://api.q-timer.com/sed-api/api/rest/photo/660",
        date: "2019-01-13T21:34Z",
    },
    {
        id: 3,
        name: "Daniel",
        surName: "Božik",
        level: "SENIOR",
        age: 30,
        frontend: true,
        letter: "e",
        avatar: "https://api.q-timer.com/sed-api/api/rest/photo/662",
        date: "2019-05-09T21:34Z",
    },
    {
        id: 5,
        name: "Tomáš",
        surName: "Košík",
        level: "JUNIOR",
        age: 20,
        frontend: true,
        letter: "c",
        avatar: "https://api.q-timer.com/sed-api/api/rest/photo/624",
        date: "2012-01-09T21:34Z",
    },
    {
        id: 6,
        name: "Gabriel",
        surName: "Csollei",
        age: 25,
        frontend: true,
        level: "STUDENT",
        letter: "az",
        avatar: "https://api.q-timer.com/sed-api/api/rest/photo/663",
        date: "2019-11-11T21:34Z",
    },
    {
        id: 7,
        name: "Tomáš",
        surName: "Lekeň",
        age: 25,
        letter: "az",
        frontend: false,
        level: "SENIOR",
        avatar: "https://api.q-timer.com/sed-api/api/rest/photo/654",
        date: "2019-12-12T21:34Z",
    }
];
