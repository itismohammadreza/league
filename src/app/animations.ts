import {animate, AnimationTriggerMetadata, group, query, style, transition, trigger} from '@angular/animations';

const FadeAnimation = [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        background: '#fff',
        height: '100%',
        'z-index': 10
      })
    ], {optional: true}),

    query(':leave', [
      style({opacity: 1}),
      animate('0.5s', style({opacity: 0}))
    ], {optional: true}),

    query(':enter',
      [
        style({opacity: 0}),
        animate('0.5s', style({opacity: 1}))
      ], {optional: true})
  ])
]

const animations: any = {
  none: [],
  fade: FadeAnimation,
}

export function RouteAnimation(name: string): AnimationTriggerMetadata {
  return trigger('routeAnimation', animations[name] || animations['none']);
}
