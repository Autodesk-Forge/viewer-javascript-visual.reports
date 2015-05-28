

function testAsync2() {
    
    var leafNodes = getLeafNodeObjs();
    console.log("\nLEAF NODES: " + leafNodes.length);   // NOTE: Leaf nodes always is correct

        // for each leaf node, find out what Material bucket this object goes in
    var promises = [];
    $.each(leafNodes, function(num, dbId) {
        promises.push(function() {
            console.log("promise: " + num);
        });
    });
    $.when.apply($, promises).then(function() {
        console.log("All done");
    }, function() {
        console.log("Error happened!");
    });
}


/*  START:  raw test of jQuery Promise/Deferred.  This is called from "Test Async" button on page
        NOTE:  it seems to work in the correct order, but I do notice a weird behavior.  When I use an anonymous
               function for the when.apply().then() statement, it doesn't execute.  But, calling a declared function
               does.  All examples on Google use an anonymous function, so that should work!
*/
function foo(i, cb) {
    console.log("FOO: " + i);
}

function testAsync() {
    var promises = [];
    function createPromise() {
        var p = $.Deferred();
        promises.push(p);
        //return function() { p.resolve(); };
        return p.resolve; // Doesn't create an anonymous function
    };
    for (var i = 0; i < 3; i++) {
         foo(i, createPromise());
    }
    $.when.apply($, promises).then(signalDone("Finite!"));
}

function signalDone(str) {
    alert(str);
}

/*  END: raw test of jQuery Promise/Deferred */
    