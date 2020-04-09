const Application = Shopware.Application;
import './component';
import './config';
import './preview';

Application.getContainer('service').cmsService.registerCmsElement({
    name: 'moorl-twig',
    label: 'HTML/Twig',
    component: 'sw-cms-el-moorl-twig',
    configComponent: 'sw-cms-el-config-moorl-twig',
    previewComponent: 'sw-cms-el-preview-moorl-twig',
    defaultConfig: {
        contentHTML: {
            source: 'static',
            value: `<p class="moorl-cms-twig-title">
    {{ shopware.config.MoorlCmsTwig.config.string }}
</p>
<p class="moorl-cms-twig-logo">
    <img src="{{ shopware.theme['sw-logo-desktop'] }}" alt="Logo">    
</p>
<p>
    {{ activeRoute }}
</p>`.trim()
        },
        contentCSS: {
            source: 'static',
            value: `.moorl-cms-twig-title {
    font-weight: 600;
    color: {{ shopware.config.MoorlCmsTwig.config.color }};           
}
.moorl-cms-twig-logo {
    padding: 15px;
    background-color: {{ shopware.theme['sw-color-brand-primary'] }};          
}`,
        },
        contentJS: {
            source: 'static',
            value: `console.log("{{ shopware.config.MoorlCmsTwig.config.string }}");`,
        },
        useTwig: {
            source: 'static',
            value: true,
        }
    }
});
