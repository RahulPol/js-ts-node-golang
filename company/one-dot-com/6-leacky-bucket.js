// A leaky bucket algorithm is often used for rate limiting in systems. It allows a certain number of requests to be processed per unit of time, preventing sudden bursts of traffic from overwhelming the system. In JavaScript, you can implement a leaky bucket algorithm like so:

class LeakyBucket {
  constructor(rate, capacity) {
    this.rate = rate; // Rate of leak (requests per second)
    this.capacity = capacity; // Capacity of the bucket
    this.water = 0; // Current water level in the bucket
    this.lastLeak = Date.now(); // Last time the bucket leaked
    this.timer = setInterval(() => this.leak(), 1000 / rate);
  }

  leak() {
    const now = Date.now();
    const elapsed = now - this.lastLeak;
    this.lastLeak = now;
    const leakAmount = (elapsed / 1000) * this.rate;
    this.water = Math.max(0, this.water - leakAmount);
  }

  request(amount) {
    this.water = Math.min(this.capacity, this.water + amount);
    if (this.water <= this.capacity) {
      console.log("Request allowed. Water level: " + this.water);
      return true;
    } else {
      console.log("Request denied. Water level: " + this.water);
      return false;
    }
  }

  stop() {
    clearInterval(this.timer);
  }
}

// Example usage:
const bucket = new LeakyBucket(2, 5); // Allow 2 requests per second, with a capacity of 5
bucket.request(3); // Allowed
bucket.request(2); // Denied
