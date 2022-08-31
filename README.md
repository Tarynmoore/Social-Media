# Social Media Backend

## Description
This is a social media backend application. There are many things that you can do that will all be shows in Insomnia. You can create a user, delete a user, and add user's to each others friends. Each user also has a thought that can reacted by another user. 

## Tools Used 
+ npm nodemon 
+ express
+ mongoDb 
+ Insomnia 

## Instructions 
Before you do anything you must run an npm i to install the packages that are in the package.json 
```bash 
npm i 
```
Next, run watch to get the server to begin 
```bash
npm run watch 
```
After open up Insomnia and you should be connected through your localhost. 

There are many paramaters that you can use but here is a breakdown of what they each should do. 
+ /api/users - can be used to GET all users and POST new users 
[Untitled_ Aug 31, 2022 12_03 PM.webm](https://user-images.githubusercontent.com/101439331/187748281-c0b3a957-6d32-4281-880c-8b46fb9865ca.webm)

+ /api/users/:userId - PUT to update a user with the required params, DELETE a user, and GET a single user by id. 
+ /api/users/:userId/friends/:friendId - POST to add a new friend to an existing user, and DELETE a friend from an existing user. 
+ /api/thoughts - GET all thoughts, and POST a new thought
+ api/thoughts/:thoughtId - DELETE a thought, PUT to update a thought, GET a single thought. 
+ api/thoughts/:thoughtId/reactions - POST a new reaction 
+ api/thoughts/:thoughtId/reactions/:reactionId - DELETE a reaction. 

Once you decide which request you want, then you can watch the magic happen in Insomnia!




