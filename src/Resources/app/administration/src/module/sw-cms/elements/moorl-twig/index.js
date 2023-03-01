const Application = Shopware.Application;
import './component';
import './config';

Application.getContainer('service').cmsService.registerCmsElement({
    plugin: 'MoorlCmsTwig',
    icon: 'regular-code',
    name: 'moorl-twig',
    label: 'HTML/Twig',
    component: 'sw-cms-el-moorl-twig',
    configComponent: 'sw-cms-el-config-moorl-twig',
    previewComponent: 'sw-cms-el-preview-moorl-twig',
    defaultConfig: {
        contentHTML: {
            source: 'static',
            value: `<p class="moorl-cms-twig-title">
    {{ config('MoorlCmsTwig.config.string') }}
</p>
<p class="moorl-cms-twig-logo">
    <img src="{{ theme_config('sw-logo-desktop') }}" alt="Logo">    
</p>
<p>
    {{ activeRoute }}
</p>`.trim()
        },
        contentCSS: {
            source: 'static',
            value: `.moorl-cms-twig-title {
    font-weight: 600;
    color: {{ config('MoorlCmsTwig.config.color') }};           
}
.moorl-cms-twig-logo {
    padding: 15px;
    background-color: {{ theme_config('sw-color-brand-primary') }};          
}`,
        },
        contentJS: {
            source: 'static',
            value: `console.log("{{ config('MoorlCmsTwig.config.string') }}");`,
        },
        useTwig: {
            source: 'static',
            value: true,
        }
    }
});
