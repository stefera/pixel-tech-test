/// dummy data for dogs
const dogs = [
  {
    id: 1,
    name: "Max",
    dateOfBirth: "15-04-2019",
    breed: "Labrador Retriever",
    weight: 25,
    imageUrl: "https://example.com/max.jpg",
  },
  {
    id: 2,
    name: "Bella",
    dateOfBirth: "02-11-2020",
    breed: "Poodle",
    weight: 15,
    imageUrl: "https://example.com/bella.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    dateOfBirth: "10-09-2016",
    breed: "German Shepherd",
    weight: 30,
    imageUrl: "https://example.com/charlie.jpg",
  },
  {
    id: 4,
    name: "Lucy",
    dateOfBirth: "21-07-2017",
    breed: "Beagle",
    weight: 12,
    imageUrl: "https://example.com/lucy.jpg",
  },
  {
    id: 5,
    name: "Cooper",
    dateOfBirth: "08-03-2022",
    breed: "Golden Retriever",
    weight: 20,
    imageUrl: "https://example.com/cooper.jpg",
  },
  {
    id: 6,
    name: "Luna",
    dateOfBirth: "05-06-2021",
    breed: "Siberian Husky",
    weight: 18,
    imageUrl: "https://example.com/luna.jpg",
  },
  {
    id: 7,
    name: "Rocky",
    dateOfBirth: "17-12-2015",
    breed: "Boxer",
    weight: 28,
    imageUrl: "https://example.com/rocky.jpg",
  },
  {
    id: 8,
    name: "Daisy",
    dateOfBirth: "29-09-2018",
    breed: "Bulldog",
    weight: 22,
    imageUrl: "https://example.com/daisy.jpg",
  },
  {
    id: 9,
    name: "Maximus",
    dateOfBirth: "12-01-2017",
    breed: "Rottweiler",
    weight: 32,
    imageUrl: "https://example.com/maximus.jpg",
  },
  {
    id: 10,
    name: "Sadie",
    dateOfBirth: "06-08-2020",
    breed: "Shih Tzu",
    weight: 10,
    imageUrl: "https://example.com/sadie.jpg",
  },
];

const Dog = require("./models/dog-model");

const resolvers = {
  //for now (pre MongoDB connect) populate using dummy data
  Query: {
    // get all dogs.
    dogs: (_, __, { dataSources }) => {
      return Dog.find() //mongoose operation that sits on the schema created, no args passed bc we want all dogs
        .then((returnedDogs) => {
          // need to map over returned array into to convert mongodb native id into a string for each object
          return returnedDogs.map((dog) => {
            return {
              ...dog._doc, //given property isolates just the important info
              _id: dog.id, // conversion to string (built in mongoose property)
            };
          });
        })
        .catch((err) => console.log(err));
    },
    dogById: (_, { id }, { dataSources }) => {
      return Dog.findById(id) //id required passed as an argument
        .then((returnedDog) => {
          return {
            ...returnedDog._doc,
            _id: returnedDog.id, // conversion to string (built in mongoose property)
          };
        })
        .catch((err) => console.log(err));
    },
    dogByBreed: (_, { breed }, { dataSources }) => {
      return Dog.find({ breed: breed }) //breed required passed as an argument
        .then((returnedDogs) => {
          return returnedDogs.map((dog) => {
            return {
              ...dog._doc,
              _id: dog.id, // conversion to string
            };
          });
        })
        .catch((err) => console.log(err));
    },
  },
  Mutation: {
    createDog: (_, { name, breed, dateOfBirth }, { dataSources }) => {
      const newDog = new Dog({
        name,
        breed,
        dateOfBirth,
      });

      return newDog
        .save()
        .then((result) => {
          console.log(result._doc);
          return result._doc;
        })
        .catch((err) => console.log(err));
    },
    renameDog: (_, { id, newName }, { dataSources }) => {
      console.log(id, newName);
      return Dog.findOneAndUpdate(
        // change to 'save' on refactoring
        { _id: id }, //find by ID
        { name: "good boy" }, // update selected dog with newName
        { new: true } // return the dog that was just updated
      )
        .then((updatedDog) => {
          console.log({ ...updatedDog._doc, _id: updatedDog._id.toString() });
          return { ...updatedDog._doc, _id: updatedDog._id.toString() };
        })
        .catch((err) => console.log(err));
    },
  },
};

module.exports = resolvers;
