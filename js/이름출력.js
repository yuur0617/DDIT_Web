let v_div = document.querySelector('div');

function f_name(){
    let n_arr = [];
    let name="";
    while(1){
        name = prompt("이름을 입력하세요.");

        if(name == 0) break;

        n_arr.push(name);
        
    }
    v_div.innerHTML = n_arr;
}

