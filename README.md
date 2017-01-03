# Redux Actuator
Trigger events inside components by reacting on pure state changes. Actuator keeps you from writing 
component lifecycle hooks boilerplate code by providing declarative API.

## Motivation
In Redux apps subscribing to events inside components is typically considered as an anti-pattern. 
Components should be as pure as possible, meaning that they shouldn't have an internal state and 
they can only respond to props changes. This makes even more sense if we take into an account
that React is ["pull"-based](https://facebook.github.io/react/contributing/design-principles.html): you 
don't have a control over rendering, you simply take the data and provide corresponding piece of DOM.

But there are cases when you want to comminicate with components in an imperative way. Imagine if 
you have an `<IframePreview>` component and you need to be able to manually reload it when the button
is clicked:

  > here be an image
  
