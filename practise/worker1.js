var count = 0;
function timer(){
    count++;
    postMessage(count);
}
function start(){
    setInterval("timer()",500);
}
start();
