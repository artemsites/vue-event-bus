# Simple event bus on Vue 3 rectivity

A simple event bus allows different components to communicate with each other without direct parent-child coupling. This can be useful for global communication or for cases where components are at different levels of nesting.

**Attention:** Using the event bus can lead to less predictable data flow and degraded code maintainability, so it is recommended to use this approach when other methods of communication between components are impossible or ineffective.

## Languages
### Russian
https://github.com/artemsites/vue-event-bus/blob/main/README.ru.md

## Usage

To get started, import `EventBus` into your component:

```javascript
import eventBus from 'path/to/eventBus.vue.js';
```

### Event subscription (`on')

Example of subscribing to the 'some-event' event:

```javascript
eventBus.on('some-event', (payload) => {
console.log('A some-event event occurred with the data:', payload);
});
```

### Unsubscribe from the event (`off')

Canceling a subscription to a 'some-event' using a specific callback function `callback`:

```javascript
eventBus.off('some-event', callback);
```

### Publishing an event (`emit')

An example of publishing a 'some-event' event with some data:

```javascript
EventBus.emit('some-event', { text: 'Hello world!' });
```

## Methods

### on(event, callback)

- `event`: The name of the event you want to subscribe to.
- `callback`: A callback function that will be called when an event occurs.

### off(event, callback)

- `event`: The name of the event you want to unsubscribe from.
- `callback`: The callback function that needs to be deleted.

### emit(event, ...args)

- `event`: The name of the event that you want to trigger.
- `...args`: Arguments that will be passed to the callback function.

## Example

```javascript
// Subscribing
to the EventBus.on('msg', (data) => {
console.log(data);
});

// Sending the event with all the necessary data
EventBus.emit('msg', { text: 'This is a test message' });

// When to unsubscribe from
the EventBus.off event('msg', callback);
```
