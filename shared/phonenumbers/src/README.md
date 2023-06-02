Demo of how the Typescript type system can be used to validate
character sequences at compile time.

Below, we see how the compiler flags an attempt to call a function with an invalid phone number entry, when it only expects phone numbers issued by MTN (a telco operating across Africa)

![only MTN numbers](vscode-local:/only-mtn-numbers-ts.png)