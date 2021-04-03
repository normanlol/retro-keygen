function gen(type) {
    if (!type) {return;}
    else {
        switch(type) {
            case "95cd":
                var k = site() + "-" + divbysev();
                document.getElementById("result").innerHTML = k;
            return;

            case "95oem":
                document.getElementById("result").innerHTML = oem();
            return;

            default:
                document.getElementById("result").innerHTML = "[Invalid selection]";
            return;
        }
    }
}

function site() {
    var s = Math.floor(Math.random() * 1000);
    if (s == 333 || s == 444 || s == 555 || s == 666 || s == 777 || s == 888 || s == 999) {return site();}
    else {
        if (s.toString().length == 1) {var s = "00" + s;}
        else if (s.toString().length == 2) {var s = "0" + s;}
        else {var s = s.toString();}
        return s;
    }
}

function divbysev(o) {
    if (o !== true) {
        for (let j = 0; j <= 9999999; j++) {
            var key = Math.floor(Math.random() * 9999999).toString().padStart(7, 0);

            if (/[08-9]/.test(key.slice(-1))) continue; 
            var digitSum = key.split('').map(Number).reduce((a, b) => a + b, 0); 

            if (digitSum % 7 !== 0) continue;

            return key;
        }
    } else {
        for (let j = 0; j <= 999999; j++) {
            var key = Math.floor(Math.random() * 999999).toString().padStart(7, 0);
    
            if (/[08-9]/.test(key.slice(-1))) continue; 
            var digitSum = key.split('').map(Number).reduce((a, b) => a + b, 0); 
    
            if (digitSum % 7 !== 0) continue;
    
            return key;
        }
    }
    
}

function oem() {
    var d = Math.floor(Math.random() * 366).toString().padStart(3, 0);
    
    var y = Math.floor(Math.random() * (103 - 95) + 95);
    if (y.toString().substring(0,1) == "1") {var y = y.toString().substring(1,3);} 
    else {var y = y.toString();}

    var h = Math.floor(Math.random() * 99999).toString().padStart(5, 0);

    return d + y + "-OEM-" + divbysev(true) + "-" + h;
}