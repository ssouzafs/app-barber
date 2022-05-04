const mix = require('laravel-mix');

mix
    .sass('node_modules/bootstrap/scss/bootstrap.scss', 'public/adm/assets/css/bootstrap.css')
    // Reset
    .sass('resources/views/admin/assets/scss/reset.scss', 'public/adm/assets/css/reset.css')
    // Login
    .sass('resources/views/admin/assets/scss/login.scss', 'public/adm/assets/css/login.css')
    // App
    .sass('resources/views/admin/assets/scss/app.scss', 'public/adm/assets/css/app.css')

    .styles([
        'resources/views/admin/assets/js/datatables/css/jquery.dataTables.min.css',
        'resources/views/admin/assets/js/datatables/css/responsive.dataTables.min.css',
        // 'resources/views/admin/assets/js/select2/css/select2.min.css',
    ], 'public/adm/assets/css/libs.css')

    .js('resources/js/app.js', 'public/js')

    .scripts([
        'node_modules/jquery/dist/jquery.js',
        'resources/views/admin/assets/js/jquery-ui.min.js'
    ], 'public/adm/assets/js/jquery.js')

    .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/adm/assets/js/bootstrap.js')

    .scripts('resources/views/admin/assets/js/login.js', 'public/adm/assets/js/login.js')

    .scripts(['node_modules/bootstrap-select/dist/js/bootstrap-select.js', 'node_modules/bootstrap-select/dist/js/i18n/defaults-pt_BR.js'],
        'public/adm/assets/js/bootstrap-select.js')

    .scripts([
        'resources/views/admin/assets/js/datatables/js/jquery.dataTables.min.js',
        'resources/views/admin/assets/js/datatables/js/dataTables.responsive.min.js',
        'resources/views/admin/assets/js/datatables/js/datetime.js',
        // 'resources/views/admin/assets/js/select2/js/select2.min.js',
        // 'resources/views/admin/assets/js/select2/js/i18n/pt-BR.js',
        'resources/views/admin/assets/js/jquery.form.js',
        'resources/views/admin/assets/js/jquery.mask.js',
    ], 'public/adm/assets/js/libs.js')

    // Datatables Customizado
    .scripts('resources/views/admin/assets/js/datatables/js/custom-datatables.js',
        'public/adm/assets/js/datatables/js/custom-datatables.js')

    // Scripts Globais
    .scripts('resources/views/admin/assets/js/scripts.js',
        'public/adm/assets/js/scripts.js')

    .copyDirectory('resources/views/admin/assets/js/datatables', 'public/adm/assets/js/datatables')
    // .copyDirectory('resources/views/admin/assets/js/select2', 'public/adm/assets/js/select2')
    // .copyDirectory('node_modules/bootstrap-select/dist/js/bootstrap-select.js', 'public/adm/assets/js/select2')

    .copyDirectory('resources/views/admin/assets/css/fonts', 'public/adm/assets/css/fonts')

    .copyDirectory('resources/views/admin/assets/images', 'public/adm/assets/images')

    .options({
        processCssUrls: false
    })
    .version();
