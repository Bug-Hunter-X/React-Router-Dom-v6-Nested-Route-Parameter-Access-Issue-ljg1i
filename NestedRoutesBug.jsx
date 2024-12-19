In React Router Dom v6, a common issue arises when using nested routes with parameters.  If you have a route like `/users/:userId/profile`, and you try to access the `userId` parameter directly within a child component, you may encounter unexpected behavior or errors if the parent route hasn't successfully matched and resolved the parameter.  This can lead to undefined values or runtime errors.