"use strict";
var core_1 = require('@angular/core');
function routerTransition() {
    return slideToLeft();
}
exports.routerTransition = routerTransition;
function slideToLeft() {
    return core_1.trigger('routerTransition', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.transition('void => *', [
            core_1.style({ transform: 'translateX(100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
        ]),
        core_1.transition('* => void', [
            core_1.style({ transform: 'translateX(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToRight() {
    return core_1.trigger('slideToRight', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.transition('void => *', [
            core_1.style({ transform: 'translateX(-100%)' }),
            core_1.animate('3s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
        ]),
        core_1.transition('* => void', [
            core_1.style({ transform: 'translateX(0%)' }),
            core_1.animate('3s ease-in-out', core_1.style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
exports.slideToRight = slideToRight;
//# sourceMappingURL=router.transition.js.map