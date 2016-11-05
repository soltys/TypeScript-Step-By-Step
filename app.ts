class Greeter {
    
    public static Greet(name: string): void {
        console.log('Hello ' + name);
    }

    public static MakeError(): never {
        throw new Error("This is an Error!")
    }

}

Greeter.Greet('Pawel');

var  g = new Greeter();
