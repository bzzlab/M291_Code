const path = require('path')
module.exports = {
    pages: {
        'index': {
             entry: './01a_Basics/00_Demo/src/main.js',
            //entry: './01a_Basics/02_Exercises/src/main.js',
            //entry: './01c_Basics/00_Demo/src/main.js',
            //entry: './01c_Basics/01_Intro/src/main.js',
            //entry: './20_LB/01-Testlauf/01_Tasks/src/main.js',
            //entry: './20_LB/01a/02_Solutions/src/main.js',
            //entry: './20_LB/02-Testlauf/01_Tasks/src/main.js',
            //entry: './20_LB/02a/02_Solutions/src/main.js',
            //entry: './20_LB/02a/02_Solutions/src/main.js',
            //entry: './01c_Basics/02_Exercises/src/main.js',
            //entry: './02a_ComputedData/00_Demo/src/main.js',
            //entry: './02a_ComputedData/01_Intro/src/main.js',
            //entry: './02b_Watchers/01_Intro/src/main.js',
            //entry: './03a_Routing/01_Intro/src/main.js',
            //entry: './03a_Routing/01_Intro/src/main.js',
            //entry: './04a_Routing-Advanced/01_Intro/src/main.js',
            //entry: './05a_Routing-Evolved/01_Hooks/src/main.js',
            //entry: './05a_Routing-Evolved/03_DynamicRouting/src/main.js',
            //entry: './05a_Routing-Evolved/04_DynamicRouting_Ex605/src/main.js',
            //entry: './05a_Routing-Evolved/05_NestedRoutes_Ex606/src/main.js',
            //entry: './05a_Routing-Evolved/06_Layouts_Ac601/src/main.js',
            //entry: './06a_StateMgmt/01_Intro/src/main.js',
            //entry: './07a_StateMgmt/03_Solutions/client/src/main.js',
            //entry: './08a_StateMgmt_Advanced/01_Intro/client/src/main.js',
            //entry: './09a_Client+Server/00_Demo/client/src/main.js',
            //entry: './09a_Client+Server/03_Solutions/client/src/main.js',
            //entry: './09a_Client+Server/01_Intro/client/src/main.js',
            template: 'public/index.html',
            title: 'State in vue'
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set(
            'vue$',
            // If using the runtime only build
            path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
            // Or if using full build of Vue (runtime + compiler)
            // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
        )
    }
}
