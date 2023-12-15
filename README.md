# Ruff House

Ruff House is a React/Ruby on Rails single page pet sitter booking app. I built this app so pet owners could request pet sitting jobs and pet sitters could claim them (essentially the reverse of the Rover app). You can create either a Pet Owner or a Pet Sitter user account. Owners can add pets to their 'Doggo House' and create job requests. Sitters can set their daily rate & claim job requests. Both users can edit their profile information.

## Deployed App (Recommended)

The easiest way to see the app in action is to view the deployed verison [here](https://ruff-house.onrender.com/signin).

## Installation (Alternative)

Fork and Clone Repo down to local environment
Navigate into that directory
```bundle install
npm install && npm start --prefix client/
```

## Dashboards

Once logged in, you will see either the owner dashboard or the sitter dashboard depending on your user type.

### Owners can see:
- Requested jobs carousel (with a button that allows them to create a new request)
- Booked jobs carousel (with total cost of job & sitter who booked it)
- Completed jobs
- List of their pets (with a button that allows them to add a new pet) 

### Sitters can see:
- Booked jobs carousel
- Completed jobs carousel
- Side menu includes a menu item called Jobs that lists of all of the available jobs

## Additional Information

### Pet Owners have the following abilities:

Create
- Create account
- Create pet (pet must be atleast 3 months old)
- Create job request (cannot overlap with another job & cannot be in the past)
Update
- Profile information
- Pet picture
Delete
- Job requests that have not been booked with a sitter
- Pets (unless that is the only pet owned & it already has a job booked)

### Pet Sitters have the following abilities:

Create
- Create account (includes their daily rate – total job cost is calculated once a job is claimed)
Update
- Their account
- Can claim jobs (cannot overlap with already booked jobs)

### Future Features
- Add total amount earned to the sitter dashboard
- Add a rating feature that allows owners to rate their sitters once job is completed
- Add an All Local Sitters menu item that allows owners to view all of their local sitters & their ratings
- Favorites page for sitters. They can favorite pets and see if any jobs requests are available with those pets
- Sitters can click on pets to see their bio
- Add in activeStorage for pets (pet image gallery on pet page) & owners
- Edit/unbook jobs (owner side)
- Ability for owner to decline sitter's request to claim the job
- Owner can set daily rate range & sitter can filter by that
