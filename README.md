# Social Media Backend
Github: https://github.com/Tarynmoore/Social-Media

User routes demo video: 
[Untitled_ Aug 31, 2022 12_22 PM.webm](https://user-images.githubusercontent.com/101439331/187751562-ee3228e9-204b-46ee-aff3-398ddd942123.webm)

Thought routes demo video: 
https://youtu.be/UYBTgoDr7is

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
+ /api/users/:userId - PUT to update a user with the required params, DELETE a user, and GET a single user by id. 
+ /api/users/:userId/friends/:friendId - POST to add a new friend to an existing user, and DELETE a friend from an existing user. 
+ This link shows all the user routes: 



+ /api/thoughts - GET all thoughts, and POST a new thought
+ api/thoughts/:thoughtId - DELETE a thought, PUT to update a thought, GET a single thought. 
+ api/thoughts/:thoughtId/reactions - POST a new reaction 
+ api/thoughts/:thoughtId/reactions/:reactionId - DELETE a reaction. 

Once you decide which request you want, then you can watch the magic happen in Insomnia!




