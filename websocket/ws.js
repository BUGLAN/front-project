var ws
var addr = document.getElementById('addr')
var button = document.getElementById('btn')
var area = document.getElementById('area')
var list = document.getElementById('msg-list')

button.addEventListener('click', function() {
    console.log(addr.value)
    ws = new WebSocket(addr.value);

    ws.addEventListener('message', function(event) {
        item = document.createElement('p')
        item.innerText = current() + '收到消息: ' + event.data
        list.appendChild(item)
    });
})


var btn = document.getElementById('send')
btn.addEventListener('click', function() {
    ws.send(area.value)
    item = document.createElement('p')
    item.innerText = current() + '发送消息: ' + area.value
    list.appendChild(item)
})




function current() {
    let d = new Date(),
        str = '';
    str += d.getFullYear() + '年'; //获取当前年份 
    str += d.getMonth() + 1 + '月'; //获取当前月份（0——11） 
    str += d.getDate() + '日';
    str += d.getHours() + '时';
    str += d.getMinutes() + '分';
    str += d.getSeconds() + '秒';
    return str;
}