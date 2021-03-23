// Maslov Kirill group: 2P1.19 (p != r)
const url = document.getElementById('url');
const desc = document.getElementById('desc');
const btn = document.getElementById('paste');
const output = document.getElementById('out');

btn.addEventListener('click', () => {
    let content = document.createElement('img')
    let des = document.createElement('p')
    content.src = url.value
    des.textContent = desc.value
    output.append(content)
    output.append(des)
})