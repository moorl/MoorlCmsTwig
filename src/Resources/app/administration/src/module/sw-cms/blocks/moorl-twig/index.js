import './preview';
import './component';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'moorl-twig',
    label: 'moorl-cms.elements.general.config.label.twig',
    category: 'text',
    component: 'sw-cms-block-moorl-twig',
    previewComponent: 'sw-cms-preview-moorl-twig',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'moorl-twig'
    }
});
