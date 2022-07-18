// Generics appear in TypeScript code inside angle brackets, in the format <T>,
// where T represents a passed-in type by user. 
// T will operate in the same way that parameters work in functions, as placeholders for a type that will be declared 
// when an instance of the structure is created.
// Multiple generic types can also appear in a single definition, like <T, K, A>.

// Generics offer a way to create reusable components. Generics provide a way to make 
// components work with any data type and not restrict to one data type. 
// So, components can be called or used with a variety of data types.
function identity<T>(arg: T): T {    
    return arg;    
}    
let output1 = identity<string>("myString");    
let output2 = identity<number>( 100 );  
console.log(output1);  
console.log(output2);  