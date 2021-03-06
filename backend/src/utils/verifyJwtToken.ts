const jwt = require('jsonwebtoken')

module.exports = {
    verifyJwtToken: (token: string, secretKey: string) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return err
            } else {
                return decoded
            }
        })
    }
}