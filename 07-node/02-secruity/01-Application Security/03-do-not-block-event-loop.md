### Do not block event loop

Node.js has a single-thread event-driven architecture. Node.js is implemented around a non-blocking I/O event loop.The event loop looks for events and dispatches them to handler functions. Because of this, when CPU intensive JavaScript operations are executed, the event loop waits for them to finish. This is why such operations are called "blocking". Therefore, as a general principle, all blocking operations should be done asynchronously so that the event loop is not blocked.
