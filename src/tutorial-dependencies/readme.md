# Dependencies flow
```
Scheduler -> Meeting -> User -> Messaging
          -> User -> Messaging
```
Meeting and User will have circular dependencies.
We try to import both module in Scheduler Module.
The result is one of the service from both modules, can't be seen by Scheduler Module.
In this case, 