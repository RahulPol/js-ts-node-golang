### Perform input validation

Input validation failures can result in many types of application attacks. These include SQL Injection, Cross-Site Scripting, Command Injection, Local/Remote File Inclusion, Denial of Service, Directory Traversal, LDAP Injection and many other injection attacks.

In order to avoid these attacks, input to your application should be sanitized first. The best input validation technique is to use a list of accepted inputs. However, if this is not possible, input should be first checked against expected input scheme and dangerous inputs should be escaped.In Node.js there are some modules like validator and express-mongo-sanitize.
