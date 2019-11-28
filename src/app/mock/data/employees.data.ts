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
        surName: "Jarčák",
        age: 18,
        letter: "a",
        frontend: true,
        level: "JUNIOR",
        avatar: "/assets/images/avatars/Avatar01.png",
        date: "2019-01-10T21:34Z",
    },
    {
        id: 1,
        name: "Gregor",
        surName: "Menčovič",
        age: 39,
        frontend: true,
        letter: "z",
        level: "SENIOR",
        avatar: "/assets/images/avatars/Avatar02.png",
        date: "2019-01-09T21:34Z",
    },
    {
        id: 2,
        name: "Csaba",
        surName: "Ergendy",
        level: "SENIOR",
        age: 26,
        frontend: false,
        letter: "d",
        avatar: "/assets/images/avatars/Avatar03.png",
        date: "2019-01-13T21:34Z",
    },
    {
        id: 3,
        name: "Daniel",
        surName: "Novoležanský",
        level: "SENIOR",
        age: 30,
        frontend: true,
        letter: "e",
        avatar: "/assets/images/avatars/Avatar04.png",
        date: "2019-05-09T21:34Z",
    },
    {
        id: 5,
        name: "Tomáš",
        surName: "Vydra",
        level: "JUNIOR",
        age: 20,
        frontend: true,
        letter: "c",
        avatar: "/assets/images/avatars/Avatar05.png",
        date: "2012-01-09T21:34Z",
    },
    {
        id: 6,
        name: "Gabriel",
        surName: "Emilendro",
        age: 25,
        frontend: true,
        level: "STUDENT",
        letter: "az",
        avatar: "/assets/images/avatars/Avatar06.png",
        date: "2019-11-11T21:34Z",
    },
    {
        id: 7,
        name: "Tomáš",
        surName: "Julando",
        age: 25,
        letter: "az",
        frontend: false,
        level: "SENIOR",
        avatar: "/assets/images/avatars/Avatar07.png",
        date: "2019-12-12T21:34Z",
    }
];
