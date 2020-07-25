import Vue from 'vue'
import {
    Button,
    Icon,
} from 'view-design'

const usedViewDesign = [
    Button,
    Icon,
]

const injectViewDesign = function(Vue: any): void {
    usedViewDesign.forEach(cmp => Vue.component(cmp.name, cmp))
}

injectViewDesign(Vue)
