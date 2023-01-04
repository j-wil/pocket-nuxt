import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Toast from 'primevue/toast';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('Breadcrumb', Breadcrumb);
    nuxtApp.vueApp.component('Checkbox', Checkbox);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Toast', Toast);

    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);

    //other components that you need
});