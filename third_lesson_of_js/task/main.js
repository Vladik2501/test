let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, { 
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}];

document.write(`<div style="display: flex;flex-wrap: wrap; width: 1100px;border: 2px solid red;">`)
for (const user of users) {
    document.write(`<div style="display: flex;flex-direction: column;width: 500px;border-radius: 10px; border: 3px solid #a3ffb0 ; background: #a3ffb0; margin: 10px;align-content: center;justify-content: center"> 
<h3 style="color: #4b1777; margin-bottom: 0;margin-left: 15px">Name- ${user.name} - Age - ${user.age} - Status -${user.status}.</h3>
<h3 style="color: #4b1777; margin-top: 10px;width: 350px;margin-left: 15px">Address: City- ${user.address.city}; Country- ${user.address.country}; Street - ${user.address.street}; HouseNumber - ${user.address.houseNumber}.</h3>
<button style="width: 150px; margin-left: 20px;border-radius: 15px; background: #A2DC89;margin-bottom: 15px" > <h3 style="color: #4B1777FF">View</h3></button>
 </div>`)}
document.write(`</div>`)

