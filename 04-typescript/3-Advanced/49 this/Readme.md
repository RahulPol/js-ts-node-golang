Here we have a JavaScript utility method that is designed to double the value member of any given this.
Now, you might be familiar that this is known as the calling context in JavaScript.
It is an object that is implicitly passed into the function by the JavaScript runtime, depending upon
how the function is invoked.
Let's look at an example how we might use such a function.
Here we are creating a JavaScript object with two members, a value member pointing to the number ten
and a double member pointing to our utility function.
So if we go ahead and invoke the double method on this JavaScript object, the JavaScript runtime will
take this object and pass that into the function as this.
So within the function body, valid dot value will be changed to valid dot value.
Star two.
So after the function invocation is complete, valid dot value will now be 20.
Now, even though this works, we haven't actually annotated what this needs to be within the double
function and therefore it is not being enforced to any particular type by TypeScript.
So if you were to have an object where we misspell the value member, for example, here, we've misspelled
it as valve and then try to invoke the double method, it will result in undesirable runtime behavior.
However, we do not get any error from TypeScript.
Now TypeScript supports annotating what this should be within a particular function by using this parameter.
Here we are saying that within the double function this should be treated as something that has a member
value of type number.
This type is enforced within the function body and also enforced when trying to invoke the double function.
So when we try to invoke it on something that has a value member, TypeScript allows it.
However, if you try to invoke it on something that does not have the value member, for example, our
invalid object TypeScript, gives us a compile time error.
If you look at the error message, you can see that TypeScript is complaining that value is missing
on this particular object.
However, it is required to be present in order to invoke the double function so now we can get rid
of the error quite easily by fixing the typo in our value member.
Now there is one more thing to note about this parameter.
It must be the first parameter within the function declaration.
The reason is that this parameter is a fake parameter.
That is, it is not a part of the generated JavaScript and only used for compile time checking.
This is implicitly passed into the function by the JavaScript runtime and therefore does not need to
be part of the generated JavaScript.
