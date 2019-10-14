let mytodo = {
    day : 'monday',
    meeting: 0,
    meetdone : 0
}

let addmeeting = function(todo, meet=0){
    todo.meeting = todo.meeting + meet
}

let meetdone = function(todo, meet = 0){
    todo.meetdone = todo.meetdone - meet
}

let resetday = function(todo){
    todo.meeting = 0
    todo.meetdone = 0 
}
let getsummary = function(todo){
    let meetleft = todo.meeting + todo.meetdone
    return 'you have ' +meetleft +' meeting today'
}

addmeeting(mytodo, 4)
console.log(mytodo);
addmeeting(mytodo, 2)
console.log(mytodo);

meetdone(mytodo, 5)

console.log(mytodo);

console.log(getsummary(mytodo));