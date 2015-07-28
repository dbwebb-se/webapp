/**
 * Carl, the royal template engine.
 *
 * @version 1.0-Alpha
 * @license The MIT License (MIT)
 * @copyright Jonatan Karlsson 2015
 */
var carl = (function() {
    'use strict';
    var cache = {};
    var _c = {};

    function groupBy(array, f) {
        var groups = {};
        array.forEach(function(o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function(group) {
            return groups[group];
        });
    }

    /**
     * [buildSection description]
     * @param  {[type]} section [description]
     * @param  {[type]} replace [description]
     * @return {[type]}         [description]
     */
    function buildSection(section, replace) {
        var ret = '';
        console.log('section', section);
        console.log('replace', replace);



        return ret;
    }

    /**
     * Gets the template
     * @param  {String} src
     * @return {String}     The unparsed template
     */
    _c.getTemplate = function(src) {
        /*
        // tests if its is a url thats need loading
        if (/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/g.test(src)) {
            // url given, should now load the file from given url
            return $.get(src);
        }*/
        if (/#.+/.test(src)) {
            src = src.replace('#', '');
            // id given, it should get the template from id
            return document.getElementById(src).innerHTML;
        }
        // it should already be a view-string
        return src;
    };

    /**
     * Takes the template and parsers out all its nodes
     * @param  {String}       template
     * @return {Array}
     */
    _c.parse = function(template) {
        // Finds every Carl-node in the given template
        var nodes = template.match(/([(\{\#.*\})])[\S\s].*([^(<\/)])([(\{\/\})])/g)
            .map(function(v) {
                return v.replace(/\{|\}/g, '');
            });

        for (var x in nodes) {
            if (/\#/.test(nodes[x])) {
                nodes[x] = [ nodes[x] ];
                if (/^@/g.test(nodes[parseInt(x) + 1]) === false) {
                    nodes[x].push(nodes[parseInt(x) + 1]);
                }
                nodes[parseInt(x) + 1] = undefined;

                // Remove stop list
                nodes[parseInt(x) + 2] = undefined;
            }
        }

        // filter away undefined and return nodes
        return nodes.filter(function(v) {
            return v;
        });
    };

    /**
     * Render the parsed template and delivers a template
     * with values
     * @param  {Object|Array} template
     * @param  {Object}       data
     * @return {String}
     */
    _c.render = function(parsed, template, data) {
        parsed.forEach(function(key) {
            switch (typeof key) {
                case 'string':
                    var search = new RegExp('\{\{' + key + '\}\}');
                    template = template.replace(search, data[key]);
                    break;
                case 'object':
                    if (key.length === 1) {
                        key = key[0];
                        var currentData = data[key.replace('#', '')];

                        var startOfList = template.indexOf('{' + key + '}');
                        var endOfList = template.lastIndexOf('{/' + key.replace('#', '') + '}') + key.replace('#', '').length;
                        var diff = endOfList - startOfList;
                        // For some random reason we need +3 here. Check this.
                        var section = template.substr(startOfList, diff + 3 );

                        var sectionParts = section.split('\n').map(function(str) {
                            return str.trim();
                        });

                        // Removes first and last element in section
                        sectionParts.shift();
                        sectionParts.pop();

                        // Find whats wrapped around @index and adds it to every key
                        var wrapped = sectionParts[0].split('{@index}');
                        currentData = currentData.map(function(key) {
                            return wrapped[0] + key + wrapped[1];
                        });

                        var compiledSection = currentData.join('');
                        template = template.replace(section, compiledSection);
                    }
                    break;
                default:
                    console.log(key + ' is not supported');
                    break;
            }
        });
        return template;
    };

    return {
        parse: function(template) {
            return _c.parse(template);
        },
        compile: function(template, data) {
            console.log(cache[template]);
            if (cache[template]) {
                return cache[key]['compiled'];
            }
            var key = template;
            cache[key] = [];
            cache[key]['template'] = _c.getTemplate(template);
            cache[key]['parsed'] = _c.parse(cache[key]['template']);
            cache[key]['compiled'] = _c.render(cache[key]['parsed'], cache[key]['template'], data);
            return cache[key]['compiled'];
        }
    };
})();
