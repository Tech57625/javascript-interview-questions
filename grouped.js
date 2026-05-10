// Group Array Items by property

const users = [
    {name: "mohit", city: "Delhi"},
    {name: "Raghav", city: "Mainpuri"},
    {name: "ravindra", city: "Delhi"},
    {name: "Abhi", city: "Etawah"}
];

const Grouped =  users.reduce((acc, users) => {
    (acc[users.city]=acc[users.city] || []).push(users);

    return acc;

},{});

console.log(Grouped);
