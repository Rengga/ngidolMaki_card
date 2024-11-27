import { ref, onMounted, nextTick, onBeforeUnmount, watch } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home.vue";
import Price from "./components/Price.vue";
import Dodont from "./components/DoDont.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const homeSection = ref(null);
const priceSection = ref(null);
const doDontSection = ref(null);
const router = useRouter();
const handleScroll = () => {
    const section1Position = homeSection.value.getBoundingClientRect().top;
    const section2Position = priceSection.value.getBoundingClientRect().top;
    const section3Position = doDontSection.value.getBoundingClientRect().top;
    // Menentukan apakah section berada dalam viewport untuk trigger AOS
    if (section1Position < window.innerHeight && section1Position > 0) {
        AOS.refresh(); // Memastikan animasi di-refresh jika section terlihat
    }
    if (section2Position < window.innerHeight && section2Position > 0) {
        AOS.refresh();
    }
    if (section3Position < window.innerHeight && section3Position > 0) {
        AOS.refresh();
    }
};
onMounted(() => {
    AOS.init({
        duration: 1000, // durasi animasi dalam milidetik
        once: false, // animasi hanya diputar sekali
        mirror: true,
        // easing: "ease-in-sine",
    });
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full h-screen") }, });
    // @ts-ignore
    [Navbar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    if (__VLS_ctx.$route.path !== '/portofolio') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onScroll: (__VLS_ctx.handleScroll) }, ...{ class: ("w-full h-full relative scroll-container cus-scroll") }, ref: ("scrollContainer"), });
        // @ts-ignore navigation for `const scrollContainer = ref()`
        __VLS_ctx.scrollContainer;
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ref: ("homeSection"), id: ("homeSection"), ...{ class: ("section") }, });
        // @ts-ignore navigation for `const homeSection = ref()`
        __VLS_ctx.homeSection;
        // @ts-ignore
        [Home,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(Home, new Home({}));
        const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ref: ("priceSection"), id: ("priceSection"), ...{ class: ("section") }, });
        // @ts-ignore navigation for `const priceSection = ref()`
        __VLS_ctx.priceSection;
        // @ts-ignore
        [Price,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(Price, new Price({}));
        const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ref: ("doDontSection"), id: ("doDontSection"), ...{ class: ("section") }, });
        // @ts-ignore navigation for `const doDontSection = ref()`
        __VLS_ctx.doDontSection;
        // @ts-ignore
        [Dodont,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(Dodont, new Dodont({}));
        const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    }
    else {
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
        /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden md:block right-16 fixed bottom-1/2") }, });
    // @ts-ignore
    [Footer,];
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['scroll-container'];
    __VLS_styleScopedClasses['cus-scroll'];
    __VLS_styleScopedClasses['section'];
    __VLS_styleScopedClasses['section'];
    __VLS_styleScopedClasses['section'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['md:block'];
    __VLS_styleScopedClasses['right-16'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['bottom-1/2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "scrollContainer": __VLS_nativeElements['div'],
        "homeSection": __VLS_nativeElements['section'],
        "priceSection": __VLS_nativeElements['section'],
        "doDontSection": __VLS_nativeElements['section'],
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Home: Home,
            Price: Price,
            Dodont: Dodont,
            Navbar: Navbar,
            Footer: Footer,
            homeSection: homeSection,
            priceSection: priceSection,
            doDontSection: doDontSection,
            handleScroll: handleScroll,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
