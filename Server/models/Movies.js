import mongoose from "mongoose";

// Define Schema - Structure of Document
const movieSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    rating: {type: Number, required: true},
    money: {type: mongoose.Decimal128, required: true, min:1, max: 5, validate: v => v >=10},
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [{value: {type: String}}, {published: {type: Date, default: Date.now}}]
})
// Model - constructor for the document
const MovieModel = mongoose.model('Movie', movieSchema)


// Insert Doc
// const insertManyDoc = async ()=> {
//     try {
//         // Creating new document
//         const m1 = new MovieModel({
//             name: 'Extraction 4',
//             rating: 4,
//             money: 60000,
//             genre: ['action, adventure'],
//             isActive: true,
//             comments: [ {value: 'That was an amazing movie'}]
//     })
//         const m2 = new MovieModel({
//             name: 'Avengers Infinity',
//             rating: 4,
//             money: 60000,
//             genre: ['action, adventure'],
//             isActive: true,
//             comments: [ {value: 'That was an amazing movie'}]
//     })
//         const m3 = new MovieModel({
//             name: 'The Hobbit',
//             rating: 4,
//             money: 60000,
//             genre: ['action, adventure'],
//             isActive: true,
//             comments: [ {value: 'That was an amazing movie'}]
//     })

//             const result = await MovieModel.insertMany([m1, m2,m3])
//             console.log(result)
//     } catch (error) {
//              console.log(error)
//     }
// }


// Retrieve Docs    
// const AllDoc = async () => {

//     try {
//         // fetching all data
//         const result = await MovieModel.find()
        
//         // fetching a certain data
//         // Iterate thru the data
//         result.forEach((movie)=> {
//              console.log(movie.money)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }


// fetch single doc
// const singleDoc = async () => {    try {
//         // fetching all data
//         // const result = await MovieModel.find({name: 'Avengers Infinity'})
//         // const result = await MovieModel.find('67c7f0e07f9f1cb9700555dd' , 'name')
//         const result = await MovieModel.find().limit(2)
//         console.clear();
//         console.log(result) 

//     } catch (error) {
//         console.log(error)
//     }
// }


// update doc
// const updateDoc = async () => {    try {
//         // updateOne
//         // const result = await MovieModel.updateOne({_id: id}, { name: 'Lester'})
//         const result = await MovieModel.updateMany({'rating': 4}, {'rating': 1})
//         console.clear();
//         console.log(result) 

//     } catch (error) {
//         console.log(error)
//     }
// }
const deleteDoc = async () => {    try {
        // delete

        // const result = await MovieModel.findByIdAndDelete('67c7bfd54c1a155e08761ada')
        // const result = await MovieModel.deleteOne({name: 'Avengers Infinity'})
        const result = await MovieModel.deleteMany({rating: 1})
        console.clear();
        console.log(result) 

    } catch (error) {
        console.log(error)
    }
}

export { deleteDoc }