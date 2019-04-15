# iKu
Share your Haiku

# Heroku
Website link: https://i-kuu.herokuapp.com/

## Setting up Heroku
1. Install Heroku
2. `heroku login`
3. `heroku git:remote -a i-kuu`
4. check `git remote -v` to make sure it was added bc I'm not sure if the above command is right

## Pushing to Heroku
1. Make your cool changes
2. Go to client folder and run 'npm run build'
3. Go to root (your server/public should be added/updated)
4. `git add .`
5. `git commit -m "message"`
6. `git push heroku master`
