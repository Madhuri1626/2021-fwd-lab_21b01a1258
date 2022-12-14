uname = document.getElementById('uname').value;
console.log(uname)
function fun() {
    if (uname != '') {
        fetch('https://jsonplaceholder.typicode.com/users/' + uname)
            .then(response => response.json())
            .then(data => handledata(data))
    }
}


function handledata(data) {
    let tdata = document.getElementById('tdata');
    let but = document.getElementById('button');
    // but.style.visibility = 'hidden'
    let tr1 = document.getElementById('tr1');
    // tr1.style.visibility = 'visible';
    let row =`<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>${data.city}</td>
            </tr>`
            console.log(data.id)
    tdata.innerHTML += row;
}
