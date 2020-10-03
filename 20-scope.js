const a = 1; const b = 2; const c = 3;


(function firstFun(){
    const b = 5; const c = 6;


    (function secondfun(){
        const b = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
        (function thirdFun(){
            const a = 7; const c = 9;

                (function fourthFun(){
                    const a = 1; const c = 8;

            })()
         })
     })()
})()
