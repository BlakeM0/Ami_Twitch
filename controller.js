const logger = require('./logger');
const { validationResult } = require('express-validator');

exports.handleLurkCommand = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            logger.error('Validation errors:', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const username = req.params.username.toLowerCase();
        logger.info(`Chella lurk command received for username: ${username}`);

        let responseMessage = '';

        switch (username) {
            case '0_w1ll':
                responseMessage = 'Father Joe has slipped back into the shadows! LURK';
                break;
            case 'blakem_':
                responseMessage = 'Blake Munderscore is descending back into the shadows... he will be watching... LURK';
                break;
            case 'thejoshuatravis':
                responseMessage = 'JT is now lurking! I hate to see him go, but love to see him walk away. LURK';
                break;
            default:
                responseMessage = `${username} is watching from the shadows... but not in a creepy way. LURK`;
                break;
        }

        res.json({ message: responseMessage });
    } catch (error) {
        logger.error(`Error processing lurk command: ${error.message}`);
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
};

exports.handleCreepCommand = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            logger.error('Validation errors:', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const username = req.params.username.toLowerCase();
        logger.info(`Chella creep command received for username: ${username}`);

        let responseMessage = '';

        switch (username) {
            case 'blakem_':
                responseMessage = "Blake Munderscore is watching from the shadows thinking of Will's voice Kreygasm ... in a creepy way. LURK";
                break;
            default:
                responseMessage = `${username} is watching from the shadows... in a creepy way. LURK`;
                break;
        }

        res.json({ message: responseMessage });
    } catch (error) {
        logger.error(`Error processing creep command: ${error.message}`);
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
};

