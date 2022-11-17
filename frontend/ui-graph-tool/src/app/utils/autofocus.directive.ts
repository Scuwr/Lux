import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[autofocus]'
})
export class AutofocusDirective {

    private focus;

    constructor(private el: ElementRef) { }

    ngOnInit() {
    }

    @Input() set autofocus(condition: boolean) {
        const cond = condition != false;
        if (cond && !this.focus) {
            setTimeout(() => {
                this.el.nativeElement.focus()
            }, 0);
        }
        this.focus = cond
    }
}
