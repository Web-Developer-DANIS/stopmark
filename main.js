const array = [{
    id: 1,
    name: "Danis",
    age: 11
},{
    id: 2,
    name: "Ruslan",
    age: 15
},{
    id: 3,
    name: "Ibrohim",
    age: 14
}]

document.body.innerHTML = `
    <ul>
        ${array.map((user) => {
            console.log(user);
            
            
            
            return `
                <li>
                    <span>Id: ${user.id}</span>
                    <br>
                    <span>Name: ${user.name}</span>
                    <br>
                    <span>Age: ${user.age}</span>
                </li>
            `;
            
        }).join('')}
    </ul>
`