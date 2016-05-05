// Mongoose Recipe Schema
var recipeSchema = mongoose.Schema({
	recipeID: Number,
	author: String,
	url: String,
	ingredients: [{name: String, quantity: Number}],
	rating: Number,
	cookTime: Number,
	prepTime: Number,
	difficulty: String,
	directions: [data: String],
	tags: [data: String]

	// Maybe add later: Videos
});