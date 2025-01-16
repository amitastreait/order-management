/** Subscriber and Publish Push Events for Different Order Status */
const PushEvents = {
  // Subscriber
  subscribe: function (eventName, callback) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(callback);
  },

  // Publisher
  publish: function (eventName, data) {
    if (this._events[eventName]) {
      this._events[eventName].forEach((callback) => {
        callback(data);
      });
    }
  },

  _events: {},
};