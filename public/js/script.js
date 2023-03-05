const newline = document.getElementsByClassName("column")[0].innerHTML;

window.onkeydown = function(e) {
    var term = document.getElementById("input")
    if(e.key.length == 1){
        term.innerHTML += e.key;
    }
    else if(e.key == "Backspace"){
        term.innerHTML = term.innerHTML.slice(0, -1);
    }
    else if(e.key == "Enter"){
        term.id='';
        var output = get_output(term.innerHTML.slice(159));
        console.log(output);
        term.parentElement.innerHTML += `<div style="display: flex;justify-content: flex-start">` + output + `</div>`+newline;
    }
}

function get_output(input) {
    var command = input.split(" ")[0];
    var args = input.split(" ").slice(1);
    switch(command){
        case "help":
            return help(args);
        case "clear":
            return clear(args);
        case "echo":
            return echo(args);
        case "ls":
            return ls(args);
        case "cd":
            return cd(args);
        default:
            return "command not found";
    }
}

function help(args) {
    return "help: help [command] - display help for command"
}
function clear(args) {
    document.getElementsByClassName("column")[0].innerHTML = newline;
    return "";
}
function echo(args) {
    return args.join(" ");
}
function ls(args) {
    return "index.html"
}