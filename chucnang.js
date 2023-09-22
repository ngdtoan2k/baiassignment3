
    function checkform() {
    var y = document.getElementById("form1")
    var x = document.getElementById("ttcnhan");
    var email = document.getElementById('email');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
    alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
    email.focus;
    return false;
}
    else{
    y.style.display="none";
    x.style.display= "block";
}
}




    var btnvm = document.getElementById("add");
    var sua2la = document.getElementById("knsua2");
    function hold(){
    btnvm.style.display="block";
}
    function holdend(){
    btnvm.style.display="none";
}
    function vmcheck1(){
    sua2la.style.display="block";
}
    function vmcheck2(){
    sua2la.style.display="none";
}
    function vmchecktong(){
    switch (btnvm.className){
    case  "func1":{
    vmcheck1();
    btnvm.classList.remove("func1");
    btnvm.classList.add("func2");
    btnvm.innerText="View less";
    break;
}
    case "func2":{
    vmcheck2();
    btnvm.classList.remove("func2");
    btnvm.classList.add("func1");
    btnvm.innerText="View more";
    break;
}
}
}

    var btnvmhv = document.getElementById("addhv");
    var sua2lahv = document.getElementById("knsua2hv");
    function holdhv(){
        btnvmhv.style.display="block";
    }
    function holdendhv(){
        btnvmhv.style.display="none";
    }
    function vmcheck1hv(){
        sua2lahv.style.display="block";
    }
    function vmcheck2hv(){
        sua2lahv.style.display="none";
    }
    function vmchecktonghv(){
        switch (btnvmhv.className){
            case  "func1hv":{
                vmcheck1hv();
                btnvmhv.classList.remove("func1hv");
                btnvmhv.classList.add("func2hv");
                btnvmhv.innerText="View less";
                break;
            }
            case "func2hv":{
                vmcheck2hv();
                btnvmhv.classList.remove("func2hv");
                btnvmhv.classList.add("func1hv");
                btnvmhv.innerText="View more";
                break;
            }
        }
    }


    var btnvmhd = document.getElementById("addhd");
    var sua2lahd = document.getElementById("knsua2hd");
    function holdhd(){
        btnvmhd.style.display="block";
    }
    function holdendhd(){
        btnvmhd.style.display="none";
    }
    function vmcheck1hd(){
        sua2lahd.style.display="block";
    }
    function vmcheck2hd(){
        sua2lahd.style.display="none";
    }
    function vmchecktonghd(){
        switch (btnvmhd.className){
            case  "func1hd":{
                vmcheck1hd();
                btnvmhd.classList.remove("func1hd");
                btnvmhd.classList.add("func2hd");
                btnvmhd.innerText="View less";
                break;
            }
            case "func2hd":{
                vmcheck2hd();
                btnvmhd.classList.remove("func2hd");
                btnvmhd.classList.add("func1hd");
                btnvmhd.innerText="View more";
                break;
            }
        }
    }


    var btnvmst = document.getElementById("addst");
    var sua2last = document.getElementById("knsua2st");
    function holdst(){
        btnvmst.style.display="block";
    }
    function holdendst(){
        btnvmst.style.display="none";
    }
    function vmcheck1st(){
        sua2last.style.display="block";
    }
    function vmcheck2st(){
        sua2last.style.display="none";
    }
    function vmchecktongst(){
        switch (btnvmst.className){
            case  "func1st":{
                vmcheck1st();
                btnvmst.classList.remove("func1st");
                btnvmst.classList.add("func2st");
                btnvmst.innerText="View less";
                break;
            }
            case "func2st":{
                vmcheck2st();
                btnvmst.classList.remove("func2st");
                btnvmst.classList.add("func1st");
                btnvmst.innerText="View more";
                break;
            }
        }
    }


    var btnvmnn = document.getElementById("addnn");
    var sua2lann = document.getElementById("knsua2nn");
    function holdnn(){
        btnvmnn.style.display="block";
    }
    function holdendnn(){
        btnvmnn.style.display="none";
    }
    function vmcheck1nn(){
        sua2lann.style.display="block";
    }
    function vmcheck2nn(){
        sua2lann.style.display="none";
    }
    function vmchecktongnn(){
        switch (btnvmnn.className){
            case  "func1nn":{
                vmcheck1nn();
                btnvmnn.classList.remove("func1nn");
                btnvmnn.classList.add("func2nn");
                btnvmnn.innerText="View less";
                break;
            }
            case "func2nn":{
                vmcheck2nn();
                btnvmnn.classList.remove("func2nn");
                btnvmnn.classList.add("func1nn");
                btnvmnn.innerText="View more";
                break;
            }
        }
    }


    var btnvmkn = document.getElementById("addkn");
    var sua2lakn = document.getElementById("knsua2kn");
    function holdkn(){
        btnvmkn.style.display="block";
    }
    function holdendkn(){
        btnvmkn.style.display="none";
    }
    function vmcheck1kn(){
        sua2lakn.style.display="block";
    }
    function vmcheck2kn(){
        sua2lakn.style.display="none";
    }
    function vmchecktongkn(){
        switch (btnvmkn.className){
            case  "func1kn":{
                vmcheck1kn();
                btnvmkn.classList.remove("func1kn");
                btnvmkn.classList.add("func2kn");
                btnvmkn.innerText="View less";
                break;
            }
            case "func2kn":{
                vmcheck2kn();
                btnvmkn.classList.remove("func2kn");
                btnvmkn.classList.add("func1kn");
                btnvmkn.innerText="View more";
                break;
            }
        }
    }