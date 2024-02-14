import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OurDoctors from '@/views/OurDoctors.vue'
import AstheticTreatments from "@/views/AstheticTreatments.vue";

import PopularFaceLayout from "@/views/Asthetic/Face/PopularFaceLayout.vue"
import HydratingFacial from "@/views/Asthetic/Face/PopularFacial/HydratingFacial.vue"
import DetoxFacial from "@/views/Asthetic/Face/PopularFacial/DetoxFacial.vue"

import Services from "@/views/Services.vue";
import BeforeAfter from "@/views/BeforeAfter.vue";
import Celebrities from "@/views/Celebrities.vue";
import OurStory from "../views/AboutUs/OurStory.vue";
import OurCenter from "../views/AboutUs/OurCenter.vue";
import OurTeam from "../views/AboutUs/OurTeam.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return {
			top: 0,
			behavior: "auto",
		};
	},
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
    },
		{
			path: "/asthetic",
			name: "asthetic",
      children: [
        {
          path: "face",
          children: [
            {
              path: "popular-face",
              redirect: {name: 'asthetic.face.popular-face.hydrating-facial'},
              name: "asthetic.face.popular-face",
              component: PopularFaceLayout,
              children: [
                {
                  path: "hydrating-facial",
                  name: "asthetic.face.popular-face.hydrating-facial",
                  meta: {
                    title: 'Popular Face'
                  },
                  component: HydratingFacial
                },
                {
                  path: "detox-facial",
                  name: "asthetic.face.popular-face.detox-facial",
                  meta: {
                    title: 'Popular Face',
                    subTitle: 'Hydrating Facial'
                  },
                  component: DetoxFacial
                }
              ]
            }
          ]
        }
      ]
    },
    {
			path: "/plastic-surgery",
			name: "plastic-surgery",
			component: AstheticTreatments,
    },
    {
			path: "/about-us",
      name: "about-us",
      redirect: {name: 'about-us.our-story'},
      children: [
        {
          path: "our-story",
          name: "about-us.our-story",
          component: OurStory
        },
        {
          path: "our-center",
          name: "about-us.our-center",
          component: OurCenter
        },
        {
          path: "our-team",
          name: "about-us.our-team",
          component: OurTeam
        }
      ]
    },
     {
			path: "/resources",
			name: "resources",
			component: AboutUs,
    },
    {
			path: "/special-offer",
			name: "special-offer",
			component: AboutUs,
		},
		{
			path: "/contact-us",
			name: "contact-us",
			component: ContactUs,
		},
		// 
  ],
});

export default router
