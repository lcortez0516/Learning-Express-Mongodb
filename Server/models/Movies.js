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

const createDoc = async ()=> {
    try {
        // Creating new document
        const m1 = new MovieModel({
            name: 'Extraction 4',
            rating: 4,
            money: 60000,
            genre: ['action, adventure'],
            isActive: true,
            comments: [ {value: 'That was an amazing movie'}]
    })

            const result = await m1.save()
            console.log(result)
    } catch (error) {
             console.log(error)
    }
}

export {createDoc}