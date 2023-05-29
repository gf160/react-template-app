import React from 'react'
import { ReactComponent as Template1 } from '../templates/template1.svg'
import { ReactComponent as Template2 } from '../templates/template2.svg'

export default function SvgTemplate(props) {
    console.log('svgTemplate', props);
    switch(props.templateId){
        case 'template1':
            return (<Template1 />)
        case 'template2':
            return (<Template2 />)
        default: 
            return (<Template1 />)
    }
}
