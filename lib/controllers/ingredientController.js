import ingredients from '../models/ingredientsModel.js'

const ingredientController = {
    index: (req, res) => {
        ingredients.find({}).then((ingredient) => {
            res.json(ingredient)
        })
    },
    findIngredient: (req, res) => {
        ingredients.findOne().then((ingredient) => {
            res.json(ingredient)
        })
    },
    createIngredient: (req, res) => {
        ingredients.create(req.body).then((ingredient) => {
            res.json(ingredient)
        })
    },
    deleteIngredient: (req, res) => {
        ingredients.findByIdAndDelete(req.params.id).then((ingredient) => {
            res.json(ingredient)
        })
    },
}

export default ingredientController;