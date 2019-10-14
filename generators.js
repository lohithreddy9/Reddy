function *process(){
    yield 'Hi there!';
    yield 20;
}
let a = process()
console.log(a.next().value);
console.log(a.next());
console.log(a.next());