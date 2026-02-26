const code_iniciar_session = async (req = request, res = response) => {
    res.render('index', { title: 'Portal Empleo UP' });
}
module.exports = {
    code_iniciar_session
}