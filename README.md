# pixel-tech-test
submission by Samuel Tefera completed on 29th May 2023.

<details>
<summary>Project Instructions</summary>

### Briefing
1. Create a graphql api using express (references: https://www.apollographql.com/docs).
2. Store the data.
3. Setup a query to find a dog by name and/or breed
4. Set up a mutation to change a dogs name by id
5. Upload a public repo on git and share the clone url. provide basic and brief readme instructions for running the code locally

### Additional Considerations
- How are you going to store the data provided? What if we wanted to add an array of owners (current and previous) to each dog's record
- Can our query be made quicker for larger data set? Are there any user friendly modifications we can make?
- Do you have any suggestions as how to make our api more secure?
- What npm modules have you used and how have they helped?
</details>

<details>
<summary>Work completed</summary>
- Built an Apollo Server with express middleware
- created GraphQL Schema for:
    (queries)
    - getting all Dogs
    - getting a single Dog by its ID
    - getting a list of dogs by their breed
    (mutations)
    - creating a new dog 
    - updating an existing dog's name
- created matching resolvers
- created matching mongoose schema and connected to MongoDB
- all testing completed in Apollo Explorer

</details>


### Set up instructions:
- $ git clone https://github.com/stefera/pixel-tech-test.git
- create .env file in top level directory (see email for details)
- run $ npm i && npm start
- go to http://localhost:4000/ to open Apollo Explorer

### Notes on running the application:
- the database has been seeded with 10 dogs.
- to run the application from the Apollo Server, start with a getDogs operation to see all 10 dogs currently in the database.
- make a note of dog IDs/ breeds you want to use as arguments for getDogById, getDogsByBreed and renameDogById.
- Alternatively, you can create your own dogs, who details you can use to test the available operations.

- please let me know (samuel.t.tefera@gmail.com) if there are any permission issues that prevent read/write access to the database


<details> 
<summary> Prewritten GraphQL operations</summary>
    <details>
    <summary>Get All Dogs</summary>

    ```js 
    query {
    dogs {
    _id
    name
    breed
    dateOfBirth
    imageUrl
    weight
    }}
    ```
</details>

<details>
    <summary>Get dog by ID</summary>

    ```js 
    query {
    dogById(id: ) {
    _id
    name
    breed
    dateOfBirth
    imageUrl
    weight
  }
    }
    ```
</details>
<details>
    <summary>Get dogs by breed</summary>

    ```js
    query {
    dogByBreed(breed: "Poodle") {
    _id
    name
    breed
    dateOfBirth
    imageUrl
    weight
  }
  }
  ```
</details>
    
<details>
    <summary>Create a dog (mutation)</summary>

    ```js
    mutation {
    createDog(name: "Good Boy", breed: "Poodle", dateOfBirth: "15-01-2020") {
    _id
    name
    breed
    dateOfBirth
    imageUrl
    weight
    }
    }
    ```
</details>

</details>