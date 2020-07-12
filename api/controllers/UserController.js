/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    listAll: async function(req, res) {
        const data = await User.find();
        console.log(data)
        return res.view('pages/listAll', { data: data });
    },



    create: async function(req, res) {
        const data = await User.create(req.body).fetch();
        console.log(data);
        req.file('file').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        }, function(err, uploadedFiles) {
            if (err) return res.serverError(err);

            return res.redirect('back');
        });



    }
}