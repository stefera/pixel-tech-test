const Dog = require("./models/dog-model");

const resolvers = {
  Query: {
    // get all dogs.
    dogs: (_, __) => {
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
    dogById: (_, { id }) => {
      return Dog.findById(id) //id required passed as an argument
        .then((returnedDog) => {
          return {
            ...returnedDog._doc,
            _id: returnedDog.id, // conversion to string (built in mongoose property)
          };
        })
        .catch((err) => console.log(err));
    },
    dogByBreed: (_, { breed }) => {
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
    createDog: (_, { name, breed, dateOfBirth, weight, imageUrl }) => {
      const newDog = new Dog({
        name, //shorthand syntax
        breed,
        dateOfBirth,
        weight,
        imageUrl,
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
