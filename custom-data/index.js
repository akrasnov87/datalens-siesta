var project = new Siesta.Project.Browser()

function configLoad(callback) {
    fetch('conf.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        callback(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        callback({});
    });
}

project.configLoad = configLoad;

configLoad((args) => {
    window.__ARGUMENTS__ = args;


    project.configure({
        title               : 'Siesta generic browser examples',
        viewDOM             : true,
        maxThreads          : 1,

        // Define any global JS and CSS dependencies, these files will be injected into each test.
        preload             : ['./helper.js'],

        recorderConfig      : {
            // enable/disable certain features of the recorder, see the Siesta.Recorder.Recorder documentation
            recordMouseMoveOnIdle   : true,
            recordPointsOfInterest  : true,
            recordMouseMovePath     : false,
            recordScroll            : false,
            recordInitialWindowSize : false
        }
    });

    project.plan(
        {
            group               : 'LogIn',
            // simulation          : 'native',
            expanded            : false,
            items               : [
                {
                    pageUrl     : args.pageUrl,
                    url         : 'login/login.t.js'
                }
            ]
        },
        {
            group               : 'Collection',
            //simulation          : 'native',
            expanded            : false,
            items               : [
                {
                    pageUrl     : args.pageUrl,
                    url         : 'collection/create.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'collection/create-workbook.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'collection/permission-collection.t.js'
                }
            ]
        },
        {
            group               : 'Roles',
            //simulation          : 'native',
            expanded            : false,
            items               : [
                {
                    pageUrl     : args.pageUrl,
                    url         : 'roles/avalible.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'roles/create-role.t.js'
                }
            ]
        },
        {
            group               : 'Project',
            //simulation          : 'native',
            expanded            : false,
            items               : [
                {
                    pageUrl     : args.pageUrl,
                    url         : 'projects/avalible.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'projects/create-project.t.js'
                }
            ]
        },
        {
            group               : 'User',
            //simulation          : 'native',
            expanded            : false,
            items               : [
                {
                    pageUrl     : args.pageUrl,
                    url         : 'users/avalible.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'users/create-user.t.js'
                }
            ]
        },
        {
            group               : 'Permission',
            //simulation          : 'native',
            expanded            : false,
            items               : [
                {
                    pageUrl     : args.pageUrl,
                    url         : 'permission/permission-workbook.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'permission/permission-entries.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'permission/permission-relation.t.js'
                },
                {
                    pageUrl     : args.pageUrl,
                    url         : 'permission/permission-by-project.t.js'
                }
            ]
        },
        {
            group               : 'Embed',
            //simulation          : 'native',
            expanded            : false,
            items               : [
                {
                    pageUrl     : args.pageUrl,
                    url         : 'embed/create.t.js'
                }
            ]
        }
    )

    project.start();

});