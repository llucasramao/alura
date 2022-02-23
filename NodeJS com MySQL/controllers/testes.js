module.exports = app => {
    app.get('/teste', (req, res) => res.send('Você está em /teste!'))
}