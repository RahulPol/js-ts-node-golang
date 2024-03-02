// Observer is a behavioral design pattern that lets you define a subscription mechanism to notify
// multiple objects about any events that happen to the object they’re observing.

// Imagine that you have two types of objects: a Customer and a Store. The customer is very
// interested in a particular brand of product (say, it’s a new model of the iPhone) which
// should become available in the store very soon.

// The customer could visit the store every day and check product availability.
// But while the product is still en route, most of these trips would be pointless.

// On the other hand, the store could send tons of emails (which might be considered spam) to
// all  interested(subscribed) customers each time a new product becomes available.
// This would save customers from endless trips to the store.

// The javascript's EventEmitter is the best example of this patter, in which we can subscribe
// callbacks to events and whenever the event occurs all the callbacks are executed.

// Another name for this strategy is publisher...subscriber. So wherever pub..sub is used
// it is implementing observer pattern.

// Lets implement custom event emitter class
//EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback
// function. This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event.
// When emitting an event with multiple callbacks, each should be called in the order in which
// they were subscribed. An array of results should be returned. You can assume no callbacks passed
// to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user
// to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and
// undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of
// arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given
// event, return an empty array. Otherwise, return an array of the results of all callback calls in the
// order they were subscribed.

class EventEmitter {
  ECMap: Map<string, Function[]>;
  constructor() {
    this.ECMap = new Map();
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(
    eventName: string,
    callback: Function
  ): { unsubscribe: () => void } {
    if (!this.ECMap.has(eventName)) {
      this.ECMap.set(eventName, []);
    }
    const listeners = this.ECMap.get(eventName)!;
    listeners.push(callback);

    return {
      // NOTE: unsubscribe has access to listeners and callback from closure.
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName: string, args: Array<any> = []): Array<any> {
    const callbacks = this.ECMap.get(eventName);
    if (!callbacks) {
      return [];
    }

    return callbacks.map((cb) => cb(...args));
  }
}
