const types = [
    { type: 'b', value: 1/8 },
    { type: 'B', value: 1 },
    { type: 'KB', value: 1024},
    { type: 'MB', value: 1024 ** 2 },
    { type: 'GB', value: 1024 ** 3},
    { type: 'TB', value: 1024 ** 4 },
    { type: 'PB', value: 1024 ** 5 }
];

function main() {
    let res = document.getElementById('res');
    res.innerHTML = '';
    const num = document.getElementById('num').value;
    const type = document.getElementById('type').value;

    let factor = types.find(t => t.type === type).value
    let inBytes = num * factor;

    let resp = types.map(t => {
        return {
            unidade: t.type,
            resultado: inBytes / t.value
        }
    });

    console.log(resp)
    for (let i = 0; i < resp.length; i++){
        res.innerHTML += `<p>Valor em ${resp[i].unidade} = ${resp[i].resultado}<p>`
    }
    
}