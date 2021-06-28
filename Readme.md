# Simple system with JWT

Simples system with login and authentication routes using JWT

## endpoints

- /users
*post: create a new user (name, email, password, admin)*
get: list all users

- /tags
post: create a new tag (name)
get: list all tags

- /login
*post: enter with email and password (email, password)*

- /compliments
post: create a new comment (tag_id, user_receiver, message)

- /users/compliments/send
get: list all sended comments

- /users/compliments/receive
get: list all received comments

*routes not need authentication*

App developed during NLW #6 06/2021
