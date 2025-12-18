

const getUserDetailsByRoll = (req, res) => {
    try {
        const roll = req.params.roll;
        res.send({ roll: roll });
    } catch (error) {
        res.send({ "message": error.message })
    }
}

module.exports = { getUserDetailsByRoll }

