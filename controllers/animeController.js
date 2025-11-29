const { generateAnimeImage } = require('../lib/anime');

const animeController = {

    generate: async (req, res, next) => {
        try {
            const { prompt, style } = req.body;

            if (!prompt) {
                return res.status(400).json({ error: 'Prompt is required' });
            }

            const imageUrl = await generateAnimeImage(prompt, style);

            res.json({
                images: [imageUrl],
                model: 'anime'
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = animeController;
