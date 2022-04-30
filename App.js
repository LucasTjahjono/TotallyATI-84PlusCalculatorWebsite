    function equal() {
        let val = document.form.textview.value;
        if(val){
            document.form.textview.value = eval(val)
        }
    }


    function insert(num) {
        document.form.textview.value = document.form.textview.value + num
    }


    function empty() {
        document.form.textview.value ="";
    }


    function back() {
        var exp = document.form.textview.value;
        document.form.textview.value = exp.substring(0,exp.length-1)
    }