const person = {

    age : 25,

    tellAge : function() {
        console.log(this); // {age: 25, tellAge: ƒ}   => Buradaki this bizim person object'imizi gösteriyor
        console.log(this.age); // 25
    },

    tellAge2 : function() {
        console.log(this);  // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        console.log(this.age); // undefined   =>  Buradaki this window object'ini gösterir. Ve window object içerisinde "age" property'si bulunmadığından undefined alırız
    }.bind(this),
    
    // arrow function
    tellAge3 : () => {
        console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        console.log(this.age); // undefined
    }

}

person.tellAge();

person.tellAge2();

person.tellAge3();
