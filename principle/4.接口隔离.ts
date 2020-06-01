interface Person2{
    firstName: string;
    lastName: string;
}

function greeting2(obj: Person2){
    console.log(obj.firstName + " " + obj.lastName)
}

let p3 = {
    firstName: "张",
    lastName: "三"
};

greeting(p3);