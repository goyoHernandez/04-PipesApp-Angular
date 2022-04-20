import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'flying'
})

export class FlyingPipe implements PipeTransform {
    transform(flying: boolean): string {
        return flying ? 'si vuela' : 'no vuela';
    }
}