addEventListener("message",function(event){
    var ele = event.data;
    var sorted = ele.sort(function(a,b){
        return a - b;
    });

    self.postMessage(sorted);
})