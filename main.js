const count = () => {
    let inputValue = document.getElementById("input").value;
    counter = 0
    for (let i = 0;i < inputValue.length;i++){
        if (inputValue[i] == 'a'){
            counter++
        }
        else if (inputValue[i] == 'o'){
            counter++
        }
        else if (inputValue[i] == 'u'){
            counter++
        }
        else if (inputValue[i] == 'e'){
            counter++
        }
        else if (inputValue[i] == 'i'){
            counter++
        }
    }
    alert(counter)
}