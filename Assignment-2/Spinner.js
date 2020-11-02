function spinner(){
    var counter = 0;
    this.up = function(){
        return ++counter;
    }
    this.down = function(){
        return --counter;
    }
}
var spin = new spinner();
spin.up();
spin.down();