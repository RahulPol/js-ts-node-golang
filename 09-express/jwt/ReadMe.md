welcome to the complete guide to JSON web tokens also pronounced jots. There are a few key sections to this guide first we will look at the problem that is solved by jots then we will look at
some examples tokens to understand the structure and finally implement jots support in an back-end as well as a JavaScript front-end application for user authentication and authorization and with that said, let's go first let's look at how the Traditional Sessions works.

![Traditional Authentication and Authorization](./1.traditional-session.png)

For authenticating and authorizing users logs in with the username and password and if these are
valid the user is now authenticated and the server stores some details about the user like the user ID on server memory or database and returns a session ID to the user to allow them to reuse
their credentials without having to authenticate again. If the user wants to access some resource on the server they provide the session ID which the server can then use to check the user authorization and provide results specific to the user.

Now there is one big problem with this approach, it requires server memory it might not seem
a big problem at first but with modern distributed server environments like AWS lambda functions or Google Cloud functions this becomes a bottleneck. The different servers that the user might be
directed to over the course of their session need to share the information about the claims against a session ID to do that you normally would offload the session storage to an external database
and that database will become a performance bottleneck for your application.

You might realize that if we could store the session information with the user so that they provide it back to us for any requests that would remove the need for this shared memory but the problem is that the user can then tamper with this session data, allowing them to change the user ID so that they can pretend to be someone else and this is the problem that is solved by jwt. Jots are just a tamper-proof.

![JWT Session](./2.jwt%20session.png)

How JWT Improve Scalability?
By sharing data with the client and simply by hashing the data with a private key to get a signature for the data. This data plus signature combination is called a jot or JSON web token if the
user tries to tamper with the data the signature will no longer match and the server can easily detect and invalidate the request. The only way to tamper with the data is to sign the tamper data
with private key and as long as the private key is kept secure on the server the client will not
be able to generate the signature so that's the key reason what jots are so popular. They allow you to remove the need for shared session storage in your distributed server and serverless architectures.

Now let's look at an JWT Structure example data payload and how its converted into a jot here we have the handy online jot debugger there are three key portions to jots first up is the header you normally don't need to interact with the header when working with common chart libraries but it is
shown over here now there are various algorithms you can use for signing the data but most commonly you will just use HS to file 6 as it offers a reasonable balance of performance and safety in the
type field will be taught by convention to help future humans next up we have the payload this contains the data that you want to share with the client now there are a set of standard field names
for common payload sections and you can see some of them here for example sub for subject most commonly the ID of the user Iat which stands for issued at and is used to store the numeric date for
when the token was issued but you are free to put any data you want in here for example we can store the user name in the database or now the final section of the jot is the signature this is generated on the server by signing the header and the payload with a secret key you are free to use any string as a secret key but a good practice is to genera
te it with a cryptographically secure random byte generator and we can use the one built into node to get a key to put o
ver here this key is used to sign the header and the payload to get the signature that becomes a part of the jot all thr
ee portions of the jot a base64 encoded for easy trance of data s text the three encoded portions of the jot are separated by periods the jot debugger provides nice color highlighting to show the correlation between the encoded and the deco
ded jot sections we can actually take the payload section of the jot in the encoded version and decode it in the browser
to see that it matches what is shown by the jot debugger so our clients will be able to read the chart payload however
if they try to modify it and send it to the server the server will generate a signature using the encoded header and pay
load sections and see if it matches the encoded signature section since the client haven't updated the signature of course it will not match and the server can reject the request the only way for the client to tamper with the data would be
to generate a new signature which they will not be able to do without the secret key which is only known to the server s
o now you've seen how juts removed the need for session storage by providing tamper proof sharing of data and you've see
n what the Example Backend tokens look like that brings us to the third portion of a guide we use dots in an application
first up we'll create the simple node.js back-end for our application we import Express and Express router you will be
using dummy data for our application which consists of two users each with their own set of action items next we create
the Express app we set up Express to serve the front-end from the public folder and now we can start working on the API
all our API will work with Jason so we ensure that we always get adjacent body our first API endpoint will be for login
we ensure that the request Heather username and password and then simply look up the user from the demo users of course
in the real world the passwords would be in a salted hash and not in a local demo variable if you find a user we return
a token to the client which contains the username that the user is now authorized to use for future requests of course without jots we are putting blind kristina users not to return a different username back to us next we create an API endpoint to load actions for authorized users if there is no token in the request we return an invalid response then we simp
ly find the user by the username present in the token and if found we return the actions for the user once more with our
jots we are trusting the user not to give us a username that they haven't received from us during the login process fin
ally we register these two endpoints under slash API and that's it for the backend application logic all we need to do n
ow is to start the server on a particular port now let's look at our UI application here we have a basic Example UI hell
o world react application and even though we are using react here the discussion around jots will be UI framework agnostic first up we create variables for the two Network endpoints then within the application component we set up various st
ate variables a variable to save the token returned from the server a variable to collect the user name from the user a
variable to collect the password and a variable to store the actions returned from the server for good UX we will also create variables for success and error messages along with the utility to clear these messages now let's try to do leti f
unctions for the two Network endpoints first up is login which is used to authenticate the user we simply make a call to
the login endpoint and if it succeeds we display the username returned from the server in our success message and also
save the token for future authorized requests next up is the utility for the actions endpoint we simply send the token t
o the server as a part of the body of the request and if it succeeds load the return actions into our action state varia
ble and with the state project completed we can now work on the rendering of our application first up we render the login form on submit we simply call the login method which as we have seen will post the username and password to the server
to get the token we have an input for the username which gives a username variable up to date and then we have a password input which keeps the passwords rebo up-to-date finally we have the login button which will trigger a submit on the f
orm that's it for login as for actions all we need is a simple button that triggers the action end point and that's the
end of our user interactive elements now we have a few pure display elements for success and error messages and finally
a slightly more involved but still a pure rendering section to display the image in the name of the loaded actions and t
hat's the end of our UI code let's jump into the browser and Application UX start playing around with this full stack ap
plication first up if you provide an invalid user name or password the server returns an error message that we then display in the UI if a valid user name and password is provided the server returns the token containing the username this to
ken is stored in the UI and also displayed to the user as a part of the success message then when we click the load actions button in the UI it sends the same token to the server allowing the server to look up and return the actions specific to the user which the UI then displays if we login with a different user and make a request to actions you can see tha
t a different set of actions is returned and of course this is driven by the user name present in the token sent as a pa
rt of the actions request now at this point the Why we need a JWT server is showing blind trust in the actions endpoint
that the token contains a username that the user was authenticated with what this means is that in the UI we can just modify the token in the actions request for example change user name to user 1 and load actions for a user that we haven't
authenticated else now let's add dot support to our back-end to prevent this issue first up real quickly and do the cha
nge in our UI now my recommended Install JWT API library for working with jots in node.js and the browser is the one cal
led JSON web token available on NPM so we install this library as well as it's stripe script type definitions once the installation is complete we jump into a server code first up we import this library into the JWT namespace as we have see
n in to sign or verify jots we need a private key here for demo purposes I'm just pasting one are randomly generated as
I've shown before into the demo variable in code we will use this private key both for signing and verifying charts the
first thing we need to do is in a Sign JWT login authentication function instead of sending an unsigned and unverifiable
JSON object we will use dot dot sign to create a jot with the given payload using the private key and now the token wil
l be the period separated encoded jot Verify JWT string so in the actions method we can verify that the signature is sti
ll valid and then decode the token back to get through the username so instead of reading username directly from the tok
en first we verify that the token is valid using jot not verify passing in the token in the private key if the token is
valid this function will also decode the token for us if the signature doesn't match what is expected then this function
will throw and we can send an invalid response to the client and now if the verify succeeded we can use the decoded tok
en to read the untempered username and that's it we've successfully used dots to safely store session data with the client now the paler section of the jot is just Decode JWT base64 encoded and not encrypted so we can still utilize its contents on the client to do that we start off by importing the JSON web token module in the UI can now in our login method
when we get the token instead of reading the username property directly off of body door token first we need to decode t
he token we can do that quite simply by using jut the decode method which works without the need for any private key thi
s method does throw if the token cannot be decoded for example if it is a malformed string so we simply show an error in
that case otherwise we use the decoded token to read the user name and then display it in the success message on the UI
and that's the end of the modifications we need to make for jots Final UX if we open up the application you can see tha
t actions are not returned when an invalid token is passed in logging in the user generates token which we can see in th
e network panel and the UI can also decode and use this token in the UI and finally when we load the actions the token i
s sent to the server where it verifies it and returns results relevant to the user specified in the token and that's all
you need to know to start using jots for whatever data and user journey you want in your Outro application smash that l
ike button and subscribe for more content like this and I will see you in the next one
