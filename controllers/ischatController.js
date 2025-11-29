const { ishchat } = require('../lib/ischat');

const ishchatController = {


    handleChat: async (req, res, next) => {
        try {
            const { message, model } = req.body;
            if (!message) {
                return res.status(400).json({ error: 'Message is required' });
            }

            const response = await ishchat(message, model);

            res.json({
                text: response,
                model: model || 'grok-3-mini'
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = ishchatController;
