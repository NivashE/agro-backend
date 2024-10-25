exports.login = (req, res) => {
    const { email, password } = req.body;
    // Add your login logic here
    res.json({ message: 'Login route hit', email, password });
};
