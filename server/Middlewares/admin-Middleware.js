const adminMiddleware = async (req, res, next) => {
    try {
        console.log(req.user)
        const isAdminRole = req.user.isAdmin
        if (!isAdminRole) {
            res.status(403).json({ message: "Access denied, User is not an admin" })
        }
        next()
    } catch (error) {
        res.status(401).json({ message: "Permission is denied" })
    }
}
module.exports = adminMiddleware